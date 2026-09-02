(function () {
  'use strict';

  window.A11Y_CONTENT = Object.freeze({
    reviewedOn: '2026-09-02',

    exampleStatuses: Object.freeze({
      reference: Object.freeze({
        label: 'Reference',
        description: 'Illustrates the core accessibility technique; adapt and test it in your product context.'
      }),
      complete: Object.freeze({
        label: 'Complete',
        description: 'Includes the expected interaction behavior described by the pattern.'
      }),
      tested: Object.freeze({
        label: 'Tested',
        description: 'Verified against the published browser and assistive-technology matrix.'
      })
    }),

    standards: Object.freeze({
      wcag22: Object.freeze({
        kind: 'Technical standard',
        name: 'Web Content Accessibility Guidelines',
        version: '2.2',
        level: 'A, AA, and AAA',
        status: 'W3C Recommendation',
        jurisdiction: 'International technical standard',
        primarySource: 'W3C Web Accessibility Initiative',
        sourceUrl: 'https://www.w3.org/TR/WCAG22/',
        lastReviewed: '2026-09-02',
        notes: '86 current success criteria. SC 4.1.1 Parsing is retained separately as a historical WCAG 2.0/2.1 criterion.'
      }),
      section508: Object.freeze({
        kind: 'Regulation / legal context',
        name: 'Revised Section 508 Standards',
        version: '2017 refresh; effective 2018',
        level: 'Incorporates WCAG 2.0 Level A and AA by reference',
        status: 'Current federal ICT requirements',
        jurisdiction: 'United States federal agencies',
        primarySource: 'U.S. Access Board / Section508.gov',
        sourceUrl: 'https://www.section508.gov/develop/applicability-conformance/',
        lastReviewed: '2026-09-02',
        notes: 'Applicability and exceptions depend on the federal ICT context.'
      }),
      adaTitleII: Object.freeze({
        kind: 'Regulation / legal context',
        name: 'ADA Title II web and mobile app rule',
        version: '28 C.F.R. Part 35, Subpart H',
        level: 'WCAG 2.1 Level A and AA, subject to the rule and its exceptions',
        status: 'Compliance dates amended in 2026',
        jurisdiction: 'United States state and local governments',
        primarySource: 'U.S. Department of Justice',
        sourceUrl: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
        lastReviewed: '2026-09-02',
        notes: 'Current dates: April 26, 2027 for entities serving 50,000 or more people; April 26, 2028 for smaller entities and special district governments.'
      }),
      adaTitleIII: Object.freeze({
        kind: 'Legal context',
        name: 'ADA Title III',
        version: 'Americans with Disabilities Act and implementing regulations',
        level: 'No single nationwide web-specific WCAG conformance rule equivalent to the Title II rule',
        status: 'Applies to covered places of public accommodation; digital application varies by jurisdiction and facts',
        jurisdiction: 'United States private places of public accommodation',
        primarySource: 'U.S. Department of Justice',
        sourceUrl: 'https://www.ada.gov/resources/web-guidance/',
        lastReviewed: '2026-09-02',
        notes: 'WCAG is widely used as a technical benchmark. This educational summary is not legal advice.'
      })
    }),

    learningPaths: Object.freeze([
      Object.freeze({
        title: 'Accessibility Fundamentals',
        description: 'Start with semantics, accessible names, focus, keyboard use, and contrast.',
        topics: Object.freeze(['Semantic HTML', 'Accessible names', 'Focus', 'Keyboard', 'Color and contrast']),
        href: '#semantic-ref'
      }),
      Object.freeze({
        title: 'Forms & Authentication',
        description: 'Build understandable forms with durable labels, errors, autocomplete, and authentication flows.',
        topics: Object.freeze(['Labels', 'Instructions', 'Errors', 'Autocomplete', 'Authentication']),
        href: '#pat-form-h'
      }),
      Object.freeze({
        title: 'Keyboard & Focus',
        description: 'Practice tab order, focus visibility, focus management, and composite-widget interaction.',
        topics: Object.freeze(['Tab order', 'Focus visibility', 'Focus management', 'Roving tabindex']),
        href: '#keyboard-ref'
      }),
      Object.freeze({
        title: 'ARIA & Custom Components',
        description: 'Use native HTML first, then apply roles, states, properties, and widget contracts carefully.',
        topics: Object.freeze(['First rule of ARIA', 'Roles', 'States', 'Properties', 'Widgets']),
        href: '#aria-ref'
      }),
      Object.freeze({
        title: 'Responsive & Mobile Accessibility',
        description: 'Account for target size, reflow, orientation, gestures, and mobile assistive technologies.',
        topics: Object.freeze(['Target size', 'Orientation', 'Reflow', 'Gestures', 'Mobile AT']),
        href: '#mobile'
      }),
      Object.freeze({
        title: 'Accessibility Testing',
        description: 'Combine keyboard checks, browser inspection, screen readers, automation, and PR review.',
        topics: Object.freeze(['Keyboard', 'Browser tools', 'Screen readers', 'Automation', 'PR review']),
        href: '#tools'
      })
    ]),

    testingMatrix: Object.freeze([
      Object.freeze({ browser: 'Chrome', screenReader: 'NVDA', platform: 'Windows', status: 'untested', notes: 'No verified result has been published yet.' }),
      Object.freeze({ browser: 'Edge', screenReader: 'JAWS', platform: 'Windows', status: 'untested', notes: 'No verified result has been published yet.' }),
      Object.freeze({ browser: 'Safari', screenReader: 'VoiceOver', platform: 'macOS', status: 'untested', notes: 'No verified result has been published yet.' }),
      Object.freeze({ browser: 'Safari', screenReader: 'VoiceOver', platform: 'iOS', status: 'untested', notes: 'No verified result has been published yet.' }),
      Object.freeze({ browser: 'Chrome', screenReader: 'TalkBack', platform: 'Android', status: 'untested', notes: 'No verified result has been published yet.' }),
      Object.freeze({ browser: 'Firefox', screenReader: 'NVDA', platform: 'Windows', status: 'untested', notes: 'No verified result has been published yet.' })
    ])
  });
})();
