# LOW EMBER execution ledger

Plan: `docs/superpowers/plans/2026-10-13-low-ember-commercial-redesign.md`
Spec: `docs/superpowers/specs/2026-10-13-low-ember-commercial-redesign.md`
Execution: native/inline.

Pre-flight interfaces:
- Task 1 produces `site`, `hours`, `nav`, `menuSections`, `privateNightFormats`, `dietaryNotes`; Tasks 2–5 consume them.
- Task 2 produces shared shell/styles; Tasks 3–5 consume them.
- Ruling: source tests use Node built-ins and inspect files directly, keeping dependencies minimal and compatible with the existing project.

Task 1: RED observed — `node --test tests/site-content.test.mjs` failed on missing LOW EMBER brand/routes and stale Wijnhaven/contact data.
Task 1: GREEN observed — `node --test tests/site-content.test.mjs` passed 2/2 after centralizing brand and venue data.
Task 1: Ruling — local verification mirrors current branch files because the container cannot resolve github.com directly; GitHub branch remains source of truth and receives the exact verified file contents.

Task 2: RED observed — extended source tests failed on missing `Fire after dark.`, missing `Records after ten`, missing `/private-nights` homepage link and guest-facing fictional/portfolio footer copy.
Task 2: GREEN observed — `node --test tests/site-content.test.mjs` passed 4/4 after rebuilding the shared header/footer/homepage and visual system.
Task 2: Ruling — motion is CSS-only and decorative; all nonessential animation is disabled under `prefers-reduced-motion`.
