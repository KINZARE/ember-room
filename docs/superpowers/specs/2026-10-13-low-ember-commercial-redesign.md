# LOW EMBER — Commercial Hospitality Demo Redesign

**Date:** 2026-10-13  
**Repository:** `KINZARE/ember-room`  
**Current live demo:** `ember-room-eight.vercel.app`  
**Target:** turn the current portfolio concept into a premium, coherent, sales-ready hospitality demo that can be shown directly to prospective horeca clients.

## 1. Intent and success criteria

The project remains a standalone portfolio/demo website. It must not connect to or replace Zichtwerf Studio.

The new brand name is **LOW EMBER**. Position it as a late-night open-fire kitchen, cocktail bar and listening room in Rotterdam. The concept should feel specific enough to be believable and premium, but it must not rely on fabricated customers, reviews, press quotes, awards or performance claims.

Success means:
- the site feels like a complete premium hospitality website rather than a student/AI demo;
- one coherent identity, address/location story, opening-hours system and tone of voice exist across all pages;
- the visual system is recognisable without relying on stock-template conventions;
- the reservation journey feels intentional and usable even though this portfolio demo does not transmit data to a live restaurant backend;
- the site demonstrates high-value horeca capabilities: menu, reservations, private nights, dietary information, location context and mobile-first UX;
- all core routes work on small mobile, normal mobile, tablet and desktop;
- production deployment is verified after implementation.

## 2. Brand direction

### Name
**LOW EMBER**

### Positioning
A late-night fire kitchen, cocktail bar and listening room where dinner flows naturally into drinks and records.

### Core line
**Fire after dark.**

### Supporting copy
- Open-fire plates. Cold drinks. Records after ten.
- Dinner without the ceremony. Drinks without the performance.
- Stay for one more.

### Character
Warm, tactile, nocturnal, slightly rebellious, editorial and intimate. Never nightclub-neon, generic luxury, techno-futurist or faux-speakeasy cliché.

### Visual system
Preserve the strongest parts of the existing site: warm low light, editorial serif/sans pairing, generous whitespace, image-led storytelling, pill CTAs and the clear Hero → Story → Menu → Booking path.

Evolve toward:
- deep soot / warm black night sections;
- bone / sand editorial canvas sections;
- ember, tobacco and olive accents;
- restrained borders and tactile paper-like surfaces;
- large close-crop photography;
- typographic moments that feel like a hospitality magazine rather than a SaaS landing page;
- subtle motion only: fade/translate reveals, slow image drift, ticker movement, hover transitions;
- no gradients, glow, glassmorphism or neon UI.

## 3. Roast Room decision memo

### Round 0 — Decision
How should the current Ember Room demo be upgraded to maximise its usefulness as a sellable hospitality portfolio asset without overbuilding a fake operating business?

### Options
A. Polish the current Ember Room identity and remove obvious demo language.  
B. Rebrand to LOW EMBER and rebuild the experience around a coherent fire-kitchen + listening-room proposition.  
C. Turn the site into a generic white-label restaurant template with interchangeable branding.  
D. Add real production integrations (booking provider, CRM, payments, live events) now.

### Hard constraints
- reuse the existing Next.js codebase;
- no fake reviews, press, awards, clients or business results;
- no unnecessary backend, auth, payments or database;
- keep the demo standalone;
- do not create legal/financial commitments;
- maintain fast mobile UX and accessible basics.

### Scoring dimensions
Customer value 25%, economics/upside 20%, strategic durability 20%, execution feasibility 15%, distribution/speed 10%, downside/reversibility 10%.

### Round 1 — Independent positions
- **Customer Obsession:** B. A real horeca buyer needs to see a complete brand experience and a believable guest journey, not merely prettier styling.
- **Startup Truth:** A/B split. The fastest learning comes from improving the current demo, but a sharper concept is justified because the current identity is generic enough to limit differentiation.
- **Offer & Growth:** B. A named premium concept is easier to sell in outreach and portfolio calls than a generic template.
- **Attention & Distribution:** B. LOW EMBER creates stronger imagery, hooks and short-form portfolio content than the existing broad cocktail-bar concept.
- **SaaS Scale:** C minority. Reusable structure matters, but exposing a generic template would lower perceived craft. Build reusable internals, not a generic-looking front end.
- **Operating System:** A minority. Avoid widening scope beyond the demo’s sales job; every new page must justify itself.
- **Capital Allocation:** B. The rebrand is cheap and reversible relative to the potential increase in portfolio value. Real third-party integrations are not justified yet.

### Round 2 — Cross-examination
- B fails if the rebrand becomes visual theatre without improving guest tasks. Therefore booking, menu, private nights and practical information must be first-class.
- C is operationally reusable but weakens the premium impression. Reusability should exist in component architecture, not in the public experience.
- D creates maintenance, provider dependencies and fake operational complexity without evidence that the demo needs them.
- A is faster but leaves the strongest commercial weakness unresolved: the current concept still reads like a mood board instead of a distinctive venue.

### Round 3 — Final vote
- Customer Obsession: B / 82
- Startup Truth: B / 68
- Offer & Growth: B / 84
- Attention & Distribution: B / 86
- SaaS Scale: C / 72
- Operating System: A / 74
- Capital Allocation: B / 80

**Vote:** B 5/7, A 1/7, C 1/7.  
**Verdict:** choose B, while enforcing A’s scope discipline and C’s internal reusability.

### Kill criteria
- if added features do not improve the visible guest journey or the ability to demonstrate value to a horeca prospect, cut them;
- if custom motion hurts mobile performance or readability, remove it;
- if a section requires fake proof to feel convincing, redesign the section instead of inventing proof;
- no paid external integration unless a real client later requires it.

## 4. Information architecture

### `/` — Home
1. Sticky transparent-to-solid header.
2. Full-screen editorial hero with LOW EMBER wordmark, line “Fire after dark.” and two CTAs: Reserve / See menu.
3. Short positioning statement: open-fire plates, cocktails, vinyl after ten.
4. Signature visual triptych: fire / drink / room.
5. Menu preview with signature dishes and cocktails.
6. “After ten” listening-room section focused on records and atmosphere.
7. Private Nights teaser.
8. Practical visit information and reservation CTA.
9. Premium footer without “fictional/portfolio” language.

### `/menu`
- strong page hero;
- Food from the fire;
- Late plates;
- House cocktails;
- Zero-proof;
- short dietary/allergen note;
- optional print-friendly/downloadable menu implemented without fake business claims;
- reservation CTA.

### `/story`
- concise venue philosophy;
- why fire, why low light, why records;
- visual editorial collage;
- three operating principles;
- no fake founder biography or invented career credentials.

### `/reservations`
- booking experience styled like a real reservation product;
- guest count, date, time, name, email, optional phone/note;
- selectable service slots;
- clear success state;
- client-side only, no third-party transmission;
- no prominent “fictional demo” copy inside the guest experience;
- repository/README documents that this is a portfolio concept.

### `/private-nights`
A commercial hospitality capability page demonstrating how a real restaurant could sell private dinners, brand events or group nights.

Use qualitative content rather than fabricated booked-event statistics or fake testimonials. Include inquiry CTA and adaptable format examples.

### `/dietary`
Short, useful hospitality page showing how a venue communicates allergies, vegetarian/vegan handling and guest notes. Avoid medical guarantees.

## 5. Business information strategy

To avoid fake real-world contact data while preserving realism:
- location displayed as **Scheepvaartkwartier · Rotterdam**;
- exact street address is not shown; copy can state that directions are included with a confirmed booking, which also supports the low-key late-night concept;
- opening hours are canonical and sourced from one config object across all pages;
- do not publish invented phone numbers or third-party email addresses;
- Instagram can be shown as a non-clickable brand handle only if no account exists;
- no Google Maps embed is needed because an exact real address is intentionally not claimed.

Canonical hours:
- Thursday 17:30–00:30
- Friday–Saturday 17:30–01:30
- Sunday 17:30–23:30
- Monday–Wednesday closed

## 6. Content and tone

Copy must be concise, sensory and specific. Avoid generic luxury language such as “elevated experience,” “culinary journey,” “where passion meets…” and similar AI clichés.

Preferred language:
- “Fire after dark.”
- “Open-fire plates. Cold drinks. Records after ten.”
- “The kitchen burns late.”
- “Come for dinner. Stay for side B.”
- “Low light. High heat.”
- “Walk-ins at the bar when we can.”

## 7. Photography direction

Replace the current mixed-stock feeling with a coherent LOW EMBER image set.

Required image categories:
1. hero: intimate low-lit restaurant/listening bar, warm tungsten, no visible branding from a real venue;
2. fire: close-up hands/food over live flame, editorial crop;
3. cocktail: dark bar, clean glassware, restrained garnish, tactile surface;
4. room/vinyl: turntable/records and warm hospitality details;
5. food: one hero plate with char, smoke and natural texture.

Images must share:
- realistic documentary/editorial photography;
- warm tungsten + deep shadow grade;
- no obvious AI artifacts;
- no readable third-party logos;
- no fake celebrity/chef identity.

## 8. Interaction design

- sticky nav with active/hover states;
- mobile menu with clear close/open behaviour;
- hero image slow scale/drift only when motion is allowed;
- section reveals on opacity/translate;
- smooth but restrained hover transitions on links and buttons;
- ticker/marquee used once as a brand device, not everywhere;
- `prefers-reduced-motion` disables nonessential movement;
- keyboard focus remains visible.

## 9. Technical approach

Keep Next.js App Router + TypeScript. Reuse the current structure, but centralise brand/business data in `lib/site.ts` or an equivalent typed config.

Likely changes:
- rename content and metadata from Ember Room to LOW EMBER;
- restructure `app/page.tsx`;
- revise `app/menu/page.tsx`, `app/story/page.tsx`, `app/reservations/page.tsx`;
- add `app/private-nights/page.tsx`;
- add `app/dietary/page.tsx`;
- improve `components/SiteHeader.tsx`, `SiteFooter.tsx`, `ReservationForm.tsx`;
- add lightweight reveal/image components only where useful;
- extend `app/globals.css` rather than add a generic UI framework;
- add/upgrade automated smoke tests for routes, responsive navigation and reservation success;
- keep images local or on a controlled image source with consistent optimisation.

No database, auth, CMS, payment flow or real booking provider is required for this portfolio version.

## 10. Honesty and proof policy

Do not add:
- fake Google reviews;
- fake press logos or quotes;
- fake awards;
- fake customer counts;
- fake sold-out claims;
- fake chef CVs;
- fake event history;
- fake booking scarcity.

The site earns credibility through craft, specificity, complete UX and coherent operational details instead.

## 11. QA and release

Before production:
- typecheck;
- production build;
- route checks: `/`, `/menu`, `/story`, `/reservations`, `/private-nights`, `/dietary`;
- reservation form validation and success state;
- mobile nav open/close and CTA accessibility;
- 320px, ~375px, tablet and desktop visual QA;
- no horizontal overflow;
- image loading/fallback sanity;
- metadata/title checks;
- 404 check;
- keyboard/focus basics;
- `prefers-reduced-motion` sanity;
- production Vercel deployment status READY;
- final live smoke test on the production alias.

## 12. Expected commercial outcome

LOW EMBER should function as a portfolio sales asset that allows a prospect to imagine the same level of hospitality branding, menu presentation, booking UX, event conversion and mobile polish applied to their own venue.

The public experience should look like a real premium venue website. The project documentation remains explicit that it is a fictional portfolio concept, and no fabricated third-party proof is used to create credibility.
