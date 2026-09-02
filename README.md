# 508 Dev
Interactive accessibility training platform for web developers featuring WCAG 2.1/2.2 guidance, ARIA patterns, keyboard navigation testing, and accessibility-focused UX workflows.


# 508 Dev

> The interactive accessibility lab for people who build interfaces.

A premium, developer-first accessibility platform focused on real implementation patterns, WCAG 2.2 workflows, semantic HTML, ARIA systems, keyboard interactions, and production-grade front-end accessibility engineering.

<p align="left">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2_AA-0071e3?style=flat-square" />
  <img alt="Tech" src="https://img.shields.io/badge/stack-vanilla_JS-111?style=flat-square" />
  <img alt="Dependencies" src="https://img.shields.io/badge/dependencies-0-22c55e?style=flat-square" />
  <img alt="Status" src="https://img.shields.io/badge/status-public_preview-0071e3?style=flat-square" />
  <img alt="Architecture" src="https://img.shields.io/badge/architecture-static_routes-666?style=flat-square" />
</p>

---

## Live Demo

```txt
https://www.508dev.com
```

---

## Overview

508 Dev is an interactive accessibility engineering platform designed for developers who build production user interfaces.

Instead of teaching accessibility through static documentation alone, 508 Dev provides live playgrounds, classified reference patterns, keyboard interaction systems, browser-exposed semantic inspection, WCAG references, developer utilities, and interactive testing environments.

The platform is a static, progressively routed application with zero runtime package dependencies. The main interactive experience remains in `index.html`; focused top-level routes provide stable, bookmarkable entry points.

It is optimized primarily for:

* desktop
* laptop
* modern browsers

Mobile and tablet experiences remain responsive and functional, but the core experience is designed around developer workflows on larger screens.

---

## Why 508 Dev Exists

Most accessibility education falls into one of two categories:

1. Compliance-heavy documentation
2. Surface-level design guidance

Neither teaches developers how accessibility actually behaves in production.

508 Dev was created to bridge that gap.

The goal is to help developers:

* understand real accessibility failures
* test keyboard interactions
* visualize semantic structure
* learn ARIA behavior
* understand WCAG implementation
* ship accessible UI systems confidently

Every feature is implementation-focused.

---

## Features

# Interactive Accessibility Playgrounds

Hands-on WCAG playgrounds designed to demonstrate accessibility failures and repaired reference implementations side-by-side.

### Included playgrounds

* Target Size (WCAG 2.5.8)
* Redundant Entry (WCAG 3.3.7)
* Non-text Contrast (WCAG 1.4.11)
* Identify Input Purpose (WCAG 1.3.5)

Each playground demonstrates:

* failing implementations
* accessible implementations
* keyboard interaction differences
* visual contrast behavior
* real-world UX impact

---

# Pattern Library

Production-style accessibility patterns with:

* semantic structure
* ARIA usage
* keyboard interaction maps
* copyable implementation code
* accessibility explanations
* live interaction testing

### Included patterns

* Modal Dialog
* Tabs
* Combobox
* Toast Notifications
* Tooltips
* Skip Links
* Accordions
* Menus
* Form Validation
* Date Input Systems

The pattern system focuses on implementation realism rather than simplified demo components.

---

# WCAG Reference System

Full WCAG 2.2 reference layer including:

* 86 current WCAG 2.2 success criteria
* SC 4.1.1 Parsing retained and labeled as a historical WCAG 2.0/2.1 criterion
* level filtering (A / AA / AAA)
* principle filtering
* version filtering
* searchable criteria
* linked demonstrations
* implementation-focused descriptions

The reference layer behaves more like developer documentation than compliance documentation.

---

# Developer Utilities

Integrated accessibility engineering tools:

### Contrast Checker

* AA / AAA validation
* ratio calculations
* live color comparisons

### ARIA Inspector

* accessibility tree visualization
* role inspection
* semantic hierarchy mapping

### Heading Outline

* heading-level validation
* skipped-level detection
* document structure analysis

### Landmark Inspector

* semantic landmark coverage mapping
* structural hierarchy visualization

### Accessibility Health Check

* quick accessibility issue scanning
* categorized issue reporting

---

# Vision Simulator

Built-in visual simulations for:

* protanopia
* deuteranopia
* tritanopia
* achromatopsia
* blurred vision
* low vision
* cataract simulation

Implemented using SVG filters and real-time rendering transformations.

---

# Documentation Search System

A documentation-style search experience inspired by modern developer tooling.

### Access methods

* Header search button
* `⌘K`
* `Ctrl + K`
* `/` keyboard shortcut
* Floating controls menu

### Features

* fuzzy search aliases
* WCAG number matching
* result grouping
* highlight matching
* recent searches
* accessible combobox behavior
* keyboard navigation

---

# Onboarding System

Interactive onboarding experience introducing:

* search workflows
* floating controls
* pattern library navigation
* developer utilities

The onboarding system supports:

* keyboard interaction
* focus management
* smooth viewport transitions
* accessibility-safe overlays

---

# TOC Navigation Drawer

Documentation-style navigation system featuring:

* scroll spy behavior
* section highlighting
* grouped navigation architecture
* focus trapping
* ESC close behavior
* backdrop dismissal
* viewed-state persistence

---

# Theme System

Light and dark themes with:

* OS preference detection
* pre-paint theme initialization
* no flash-of-incorrect-theme
* localStorage persistence
* Safari compatibility handling

---

# Floating Developer Controls

Persistent utility controls:

* vision simulator access
* documentation search access
* table-of-contents access
* scroll-to-top control

All controls share:

* consistent spacing
* consistent shadows
* consistent animations
* accessible target sizing
* mobile safe-area handling

---

# Copy-to-Clipboard System

Every code block includes:

* accessible copy controls
* hover-reveal behavior
* visual confirmation states
* zero-layout-shift interactions

---

## Accessibility Features

Accessibility is foundational to the platform architecture.

### Keyboard Accessibility

* full keyboard navigation
* roving tabindex systems
* focus trapping
* ESC dismissal support
* Home / End navigation
* arrow-key widget navigation
* skip-link support
* keyboard-first workflows

---

### Focus Management

* visible focus indicators
* focus restoration
* modal focus containment
* logical tab ordering
* reduced scroll-jump behavior
* accessible overlay handling

---

### Semantic HTML

* landmark regions
* heading hierarchy
* native interactive elements
* semantic lists
* accessible navigation structure
* production-style document architecture

---

### ARIA Implementation

Includes:

* dialogs
* tabs
* comboboxes
* live regions
* disclosure widgets
* status messaging
* active descendant systems
* accessible overlays

---

### Reduced Motion Support

Animations respect:

```css
prefers-reduced-motion
```

Motion-heavy transitions are disabled automatically for users requesting reduced motion.

---

### Responsive Design

Responsive support exists for:

* desktop
* laptop
* tablet
* mobile

Primary optimization target:

* desktop accessibility workflows
* developer tooling experiences
* large-screen documentation navigation

---

## Keyboard Shortcuts

| Shortcut      | Action                        |
| ------------- | ----------------------------- |
| `⌘K`          | Open search                   |
| `Ctrl + K`    | Open search                   |
| `/`           | Open search                   |
| `ESC`         | Close overlays                |
| `Tab`         | Navigate interactive controls |
| `Shift + Tab` | Reverse keyboard navigation   |
| `Arrow Keys`  | Navigate composite widgets    |
| `Home / End`  | Jump within widget systems    |

---

## Tech Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| Markup       | HTML5                         |
| Styling      | Tailwind CSS + custom CSS     |
| Behavior     | Vanilla JavaScript            |
| Icons        | Inline SVG                    |
| Architecture | Static routes + interactive document |
| Storage      | localStorage / sessionStorage |

### Philosophy

No frameworks.

No build tooling.

Node-based repository audits are available through npm scripts; the shipped site itself has no package-runtime dependency.

No runtime dependencies.

The shipped file is the source file.

---

## Project Structure

```txt
508Dev/
├── index.html                  # Interactive home and complete legacy experience
├── learn/index.html            # Learning-path entry point
├── playground/index.html       # Playground catalog
├── playground/target-size/     # Deep-linkable lab
├── patterns/index.html         # Pattern catalog
├── test/index.html             # Testing tools and workflows
├── reference/index.html        # Developer reference catalog
├── standards/index.html        # Standards and legal-context catalog
├── assets/content-models.js    # Central standards, status, path, and test data
├── assets/route.css            # Shared route design system
├── scripts/audit.mjs           # Repository accuracy and structure checks
└── package.json                # Audit/test commands
```

---

## Screenshots

### Hero Interface

```md
/assets/screenshots/hero-light.png
/assets/screenshots/hero-dark.png
```

### Pattern Library

```md
/assets/screenshots/pattern-library.png
```

### WCAG Reference System

```md
/assets/screenshots/wcag-reference.png
```

### Search System

```md
/assets/screenshots/search-modal.png
```

### Vision Simulator

```md
/assets/gifs/vision-simulator.gif
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/deandreperry/508-dev.git
```

---

### Run Locally

Simply open:

```txt
index.html
```

in any modern browser.

No installation required.

---

### Recommended Browsers

Best experience:

* Chrome
* Safari
* Edge
* Firefox

Primary optimization targets:

* Chrome
* Safari

---

## Deployment

Recommended hosting:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages

Because the platform is static and dependency-free, deployment is instant on virtually any static host.

---

## QA Status

### Current QA Summary

* Automated source, JavaScript-syntax, metadata, and heading checks are maintained in the repository
* Desktop and mobile browser smoke checks are part of the release workflow
* Browser/assistive-technology combinations remain explicitly untested until results are documented

### Current release classification

```txt
PUBLIC PREVIEW — REFERENCE EXAMPLES
```

---

## Future Improvements

Potential future roadmap:

* additional deep-linkable detail routes
* downloadable accessibility audit reports
* PDF accessibility tooling
* screen reader announcement debugger
* interactive ARIA tree visualizer upgrades
* component export systems
* saved accessibility testing sessions
* advanced accessibility quizzes
* accessibility scoring systems
* developer certification tracks

---

## Philosophy

508 Dev is built around one core belief:

Accessibility should be learned through interaction, implementation, and testing — not passive reading.

Developers understand systems by:

* building
* testing
* breaking
* navigating
* inspecting
* comparing

The platform is intentionally designed to feel like modern developer tooling rather than educational software.

The goal is to make accessibility engineering feel practical, production-focused, and deeply integrated into front-end development workflows.

---

## Copyright

```txt
Copyright © 2026 De'Andre Perry. All rights reserved.
```

This repository is publicly viewable for portfolio and educational purposes only.

No permission is granted to copy, modify, redistribute, sublicense, or commercially use this software without explicit written permission.

---

## Author

Built by De'Andre Perry.

GitHub:

```txt
https://github.com/deandreperry
```

---

## Release Status

Example quality is classified as **Reference**, **Complete**, or **Tested**. Existing examples are labeled Reference until the documented browser and assistive-technology matrix supports stronger claims.

```txt
Public Preview
```

for public portfolio use and static hosting.
