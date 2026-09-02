import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

async function loadContentModel() {
  const source = await readFile(new URL('../assets/content-models.js', import.meta.url), 'utf8');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context);
  return context.window.A11Y_CONTENT;
}

test('standards metadata is centralized and complete', async () => {
  const content = await loadContentModel();
  assert.deepEqual(Object.keys(content.standards), ['wcag22', 'section508', 'adaTitleII', 'adaTitleIII']);
  for (const record of Object.values(content.standards)) {
    assert.match(record.sourceUrl, /^https:\/\//);
    assert.match(record.lastReviewed, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.jurisdiction);
  }
});

test('testing evidence never defaults to tested', async () => {
  const content = await loadContentModel();
  assert.ok(content.testingMatrix.length >= 4);
  assert.ok(content.testingMatrix.every((record) => record.status === 'untested'));
});

test('implementation statuses use the documented vocabulary', async () => {
  const content = await loadContentModel();
  assert.deepEqual(Object.keys(content.exampleStatuses), ['reference', 'complete', 'tested']);
});

test('top-level product routes expose unique canonical URLs', async () => {
  const routes = ['learn', 'playground', 'patterns', 'test', 'reference', 'standards'];
  for (const route of routes) {
    const html = await readFile(new URL(`../${route}/index.html`, import.meta.url), 'utf8');
    assert.match(html, new RegExp(`<link rel="canonical" href="https://www\\.508dev\\.com/${route}/">`));
    assert.match(html, /<h1>[^<]+<\/h1>/);
  }
});
