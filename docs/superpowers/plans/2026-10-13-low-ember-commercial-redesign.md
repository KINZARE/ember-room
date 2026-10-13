# LOW EMBER Commercial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the existing Ember Room Next.js demo into LOW EMBER and ship a coherent, premium, sales-ready hospitality demo with a complete guest journey, responsive polish, and production verification.

**Architecture:** Keep the current Next.js App Router + TypeScript structure. Centralize all public venue data and navigation in `lib/site.ts`, update the existing pages/components, add only the two missing hospitality routes, and keep reservation behavior client-side. Use the existing CSS architecture and add restrained motion with CSS only unless a tiny client component is needed.

**Tech Stack:** Next.js 16.4.0, React 19.3.0, TypeScript, CSS, Vercel.

**Spec:** `docs/superpowers/specs/2026-10-13-low-ember-commercial-redesign.md`

## Global Constraints

- Reuse the existing `KINZARE/ember-room` codebase; do not rebuild from scratch.
- Brand name is exactly `LOW EMBER`.
- Core line is `Fire after dark.`
- Positioning: late-night open-fire kitchen, cocktail bar and listening room in Rotterdam.
- Public location copy is `Scheepvaartkwartier · Rotterdam`; do not publish a fabricated street address.
- Canonical hours: Thu 17:30–00:30, Fri–Sat 17:30–01:30, Sun 17:30–23:30, Mon–Wed closed.
- No fake reviews, press, awards, customer counts, sold-out claims, chef CVs, event history or booking scarcity.
- No database, auth, payments, CMS or real booking provider.
- Reservation form remains client-side only and must not transmit user data.
- No gradients, glow, glassmorphism or neon UI.
- Preserve reduced-motion support, visible keyboard focus and mobile-first responsive behavior.

## Review Focus

1. **Public truthfulness:** no route may expose `fictional`, `portfolio`, sample/demo disclaimers, fake address, fake phone, fake press or fake proof in the guest-facing UI.
2. **Business-data consistency:** brand, location and opening hours must come from one config source and render consistently on all routes.
3. **Reservation usability:** required fields, future-date entry, service time selection and success state must work without network submission.
4. **Responsive integrity:** 320px and 375px widths must not horizontally overflow; mobile navigation and primary CTAs must remain usable.
5. **Motion/accessibility:** nonessential animation must respect `prefers-reduced-motion`; focus states and semantic labels remain visible/usable.

---

### Task 1: Centralize LOW EMBER brand, venue data and content

**Files:**
- Modify: `lib/site.ts`
- Modify: `app/layout.tsx`
- Modify: `README.md`
- Create: `tests/site-content.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: exported `site`, `hours`, `nav`, `menuSections`, `privateNightFormats` and `dietaryNotes` used by all later tasks.

- [ ] **Step 1: Write the failing content test**

Create `tests/site-content.test.mjs` using Node's built-in `node:test`. Assert that `lib/site.ts` contains `LOW EMBER`, `Scheepvaartkwartier`, the canonical Thursday/Sunday hours, `/private-nights`, `/dietary`, and does not contain `Wijnhaven 42` or `hello@emberroom.example`.

- [ ] **Step 2: Run the test and verify failure**

Run: `node --test tests/site-content.test.mjs`
Expected: FAIL because the current config still contains Ember Room and the old address/contact data.

- [ ] **Step 3: Implement the centralized config**

Update `lib/site.ts` to expose the approved LOW EMBER brand, location, canonical opening-hours structure, navigation, expanded menu, private-night formats and dietary notes. Remove fabricated contact data and direct street-address claims.

Update `app/layout.tsx` metadata to LOW EMBER and update `README.md` so repository documentation, not the public UI, states this is a fictional portfolio concept.

- [ ] **Step 4: Add `test` script and run checks**

Add `"test": "node --test tests/*.test.mjs"` to `package.json`.

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: centralize low ember brand data`

---

### Task 2: Rebuild the shared shell and homepage around the new proposition

**Files:**
- Modify: `components/SiteHeader.tsx`
- Modify: `components/SiteFooter.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/site-content.test.mjs`

**Interfaces:**
- Consumes: Task 1 `site`, `hours`, `nav`, `menuSections`.
- Produces: shared LOW EMBER shell and homepage visual language used by all routes.

- [ ] **Step 1: Extend the failing content test**

Assert homepage source contains `Fire after dark.`, `Records after ten`, and `/private-nights`; assert footer source does not contain `Fictional hospitality concept` or `Portfolio project`.

- [ ] **Step 2: Run test and verify failure**

Run: `npm test`
Expected: FAIL on new homepage/footer assertions.

- [ ] **Step 3: Implement header/footer/homepage**

Rework `SiteHeader.tsx` for LOW EMBER wordmark/navigation, clear mobile menu and primary reserve CTA.

Rework `SiteFooter.tsx` to show LOW EMBER, area, canonical hours and useful links without guest-facing demo disclaimers.

Rebuild `app/page.tsx` in this order: hero; positioning statement; fire/drink/room triptych; menu preview; listening-room `After ten` section; Private Nights teaser; visit/reservation CTA.

Extend `app/globals.css` with soot/bone/ember/olive/tobacco tokens, responsive editorial layouts, hover states, one ticker, subtle image drift and section reveals using CSS. Preserve visible focus and reduced-motion overrides.

- [ ] **Step 4: Run tests and typecheck**

Run: `npm test && npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: rebuild low ember homepage experience`

---

### Task 3: Upgrade menu and story into credible hospitality pages

**Files:**
- Modify: `app/menu/page.tsx`
- Modify: `app/story/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/site-content.test.mjs`

**Interfaces:**
- Consumes: Task 1 content exports and Task 2 shared shell/styles.
- Produces: complete Menu and Story routes with no fake proof.

- [ ] **Step 1: Extend failing route-content tests**

Assert menu source includes dietary navigation and zero-proof content via config usage. Assert story metadata/source no longer contains the phrase `fictional story` and includes `why fire`, `low light` or equivalent approved venue philosophy language.

- [ ] **Step 2: Run test and verify failure**

Run: `npm test`
Expected: FAIL on old menu/story content.

- [ ] **Step 3: Implement Menu and Story redesign**

Menu must show Fire, Late Plates, House Cocktails, Zero Proof, a dietary note/link and reservation CTA. Remove sample/demo labeling.

Story must explain why fire, low light and records define the room; retain the strongest three-principle structure while removing fictive biography/credentials.

- [ ] **Step 4: Run tests and typecheck**

Run: `npm test && npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: deepen low ember menu and story`

---

### Task 4: Make reservations feel production-grade without a backend

**Files:**
- Modify: `components/ReservationForm.tsx`
- Modify: `app/reservations/page.tsx`
- Modify: `app/globals.css`
- Create: `tests/reservation-content.test.mjs`

**Interfaces:**
- Consumes: canonical service/hours data where practical.
- Produces: accessible client-only reservation request experience and deterministic success state.

- [ ] **Step 1: Write the failing reservation source test**

Using `node:test`, assert `ReservationForm.tsx` contains no `fetch(`, `axios`, `formAction`, or external submission URL; assert required guest/date/time/name/email fields, a phone/note option, and success-state copy `Table request received` are present.

- [ ] **Step 2: Run test and verify failure**

Run: `npm test`
Expected: FAIL because the current success copy and experience do not match the approved flow.

- [ ] **Step 3: Implement the reservation experience**

Keep `preventDefault()` client-only behavior. Upgrade hierarchy to a step-like booking card: guests/date/time first, guest details second, concise service note, clear submit state and success state. Do not mention fictional/demo status in the guest-facing UI.

Update `app/reservations/page.tsx` with location-area context, walk-in policy and canonical hours.

- [ ] **Step 4: Run tests and typecheck**

Run: `npm test && npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: polish reservation guest journey`

---

### Task 5: Add Private Nights and Dietary routes

**Files:**
- Create: `app/private-nights/page.tsx`
- Create: `app/dietary/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/site-content.test.mjs`

**Interfaces:**
- Consumes: `privateNightFormats`, `dietaryNotes`, shared shell/styles.
- Produces: two sales-relevant hospitality routes linked from navigation/footer/homepage.

- [ ] **Step 1: Add failing route-existence/content tests**

Assert both route files exist. Assert Private Nights contains no numeric fake booking claims/testimonials and exposes a reservation/contact CTA. Assert Dietary avoids medical guarantees and explains allergy communication clearly.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`
Expected: FAIL because both route files are missing.

- [ ] **Step 3: Implement both routes**

Private Nights: formats for long-table dinner, brand night and full-room evening; qualitative capacity language only; strong inquiry/reservation CTA.

Dietary: vegetarian/vegan accommodation language, allergy note, cross-contact caution, and instruction to share needs during reservation; no guarantee claims.

- [ ] **Step 4: Run tests and typecheck**

Run: `npm test && npm run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: add private nights and dietary pages`

---

### Task 6: Production build, browser QA, PR, merge and Vercel release

**Files:**
- Modify if needed: any file from Tasks 1–5 based on QA findings.

**Interfaces:**
- Consumes: all completed implementation tasks.
- Produces: merged production-ready main branch and verified live deployment.

- [ ] **Step 1: Run local quality gate**

Run: `npm test && npm run typecheck && npm run build`
Expected: all commands exit 0.

- [ ] **Step 2: Open PR from feature branch to `main`**

PR must summarize rebrand, guest journey, added routes, no-backend reservation behavior and QA scope.

- [ ] **Step 3: Review branch diff**

Check for accidental Zichtwerf references, fake proof, guest-facing `fictional`/`portfolio` text, stale Ember Room name, stale street address, broken links and duplicated business data.

- [ ] **Step 4: Deploy preview/production candidate and run browser QA**

Verify `/`, `/menu`, `/story`, `/reservations`, `/private-nights`, `/dietary`, an unknown route/404, mobile menu and reservation success.

Viewport checks: 320px, ~375px, tablet and desktop. Confirm no horizontal overflow, readable CTAs, image loading, focus visibility and reduced-motion behavior.

- [ ] **Step 5: Fix blockers and repeat relevant gates**

Any blocker found in build/browser QA must be fixed on the same feature branch and the affected checks rerun.

- [ ] **Step 6: Merge and deploy production**

Merge only after all required gates are green. Deploy the merged source to the existing standalone `ember-room` Vercel project and wait for state `READY`.

- [ ] **Step 7: Final live smoke test**

Verify the production alias resolves to LOW EMBER, all six routes work, reservation flow succeeds client-side, and Zichtwerf Studio is untouched.

- [ ] **Step 8: Final report**

Report live URL, merged commit/PR, implemented improvements, QA results, and any intentionally deferred real-client integrations.
