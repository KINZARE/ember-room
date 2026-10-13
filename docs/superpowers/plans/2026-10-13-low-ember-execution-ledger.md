# LOW EMBER execution ledger

Plan: `docs/superpowers/plans/2026-10-13-low-ember-commercial-redesign.md`
Spec: `docs/superpowers/specs/2026-10-13-low-ember-commercial-redesign.md`
Execution: native/inline.

Pre-flight interfaces:
- Task 1 produces `site`, `hours`, `nav`, `menuSections`, `privateNightFormats`, `dietaryNotes`; Tasks 2–5 consume them.
- Task 2 produces shared shell/styles; Tasks 3–5 consume them.
- Ruling: source tests use Node built-ins and inspect files directly, keeping dependencies minimal and compatible with the existing project.
