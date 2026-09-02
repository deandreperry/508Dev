import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const failures = [];

async function filesBelow(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return filesBelow(path, extension);
    return entry.name.endsWith(extension) ? [path] : [];
  }));
  return nested.flat();
}

function check(condition, message) {
  if (!condition) failures.push(message);
}

function renderedMarkup(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<!--([\s\S]*?)-->/g, '');
}

const htmlFiles = await filesBelow(root, '.html');
for (const path of htmlFiles) {
  const name = relative(root, path);
  const html = await readFile(path, 'utf8');
  const markup = renderedMarkup(html);

  check(/<title>[^<]+<\/title>/i.test(html), `${name}: missing a descriptive title`);
  check(/<meta\s+name="description"\s+content="[^"]+"/i.test(html), `${name}: missing a meta description`);
  check(/<link\s+rel="canonical"\s+href="https:\/\/www\.508dev\.com\//i.test(html), `${name}: missing canonical metadata`);
  check(/<a\b[^>]*class="[^"]*skip-link/i.test(markup), `${name}: missing a skip link`);
  check(/<main\b[^>]*id="main"/i.test(markup), `${name}: main landmark must expose id="main"`);

  const headings = [...markup.matchAll(/<h([1-6])\b[^>]*>/gi)].map((match) => Number(match[1]));
  check(headings.filter((level) => level === 1).length === 1, `${name}: expected exactly one H1`);
  for (let index = 1; index < headings.length; index += 1) {
    check(headings[index] <= headings[index - 1] + 1, `${name}: heading level skips from H${headings[index - 1]} to H${headings[index]}`);
  }

  const ids = [...markup.matchAll(/\sid="([^"]+)"/gi)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  check(duplicateIds.length === 0, `${name}: duplicate ids: ${[...new Set(duplicateIds)].join(', ')}`);

  for (const script of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      new vm.Script(script[1], { filename: name });
    } catch (error) {
      failures.push(`${name}: inline JavaScript syntax error: ${error.message}`);
    }
  }
}

const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
const combined = `${index}\n${readme}`;

const bannedClaims = [
  /production[- ]ready/i,
  /beyond AAA/i,
  /the legal minimum/i,
  /the legal floor/i,
  /plaintiff'?s bar has industrialized/i,
  /average defense cost:\s*\$250K/i,
  /what a screen reader actually receives/i,
  /Section 508 and the ADA are the laws that adopt/i
];
for (const claim of bannedClaims) {
  check(!claim.test(combined), `unsupported or overstated claim remains: ${claim}`);
}

check(!/Departure date[\s\S]{0,350}autocomplete="bday"/i.test(index), 'departure date still uses autocomplete="bday"');
check(/86 current criteria \+ 1 historical criterion/i.test(index), 'WCAG current/historical count is not explicit');
check(/Accessibility Tree Inspector/.test(index), 'accessibility tree inspector name is missing');
check(/508 Dev provides technical accessibility education, not legal advice/i.test(index), 'legal education disclaimer is missing');
check(/ADA Title II/.test(index) && /ADA Title III/.test(index), 'ADA Title II and Title III are not distinguished');

if (failures.length) {
  console.error(`508 Dev audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`508 Dev audit passed for ${htmlFiles.length} HTML files.`);
}
