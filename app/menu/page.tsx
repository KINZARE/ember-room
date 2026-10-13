import type { Metadata } from "next";
import Link from "next/link";
import { menuSections, site } from "@/lib/site";

export const metadata: Metadata = { title: "Menu", description: "Fire-led late plates and house cocktails at Ember Room." };

export default function MenuPage() {
  return (
    <>
      <section className="page-hero page-hero--menu">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">Food & drinks</p><h1>Small menu.<br /><em>Big night.</em></h1></div>
          <div className="page-hero__aside"><p>Our menu changes with the market and the mood. Expect open-fire vegetables, proper late plates and cocktails with enough character to stand up to dinner.</p><p className="tiny-note">Sample menu · fictional portfolio concept</p></div>
        </div>
      </section>

      <section className="section menu-page">
        <div className="shell menu-page__grid">
          {menuSections.map((section) => (
            <div className="menu-page__section" key={section.title}>
              <h2>{section.title}</h2>
              {section.items.map(([name, desc, price]) => (
                <div className="menu-row menu-row--large" key={name}>
                  <div><strong>{name}</strong><span>{desc}</span></div><span>€{price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section section--sand menu-visual">
        <div className="shell menu-visual__grid">
          <div className="image-frame"><img src={site.drinkImage} alt="Cocktails served in a low-lit bar" /></div>
          <div className="menu-visual__copy"><p className="eyebrow">At the bar</p><h2>Classic bones. House rules.</h2><p>We like drinks dry, bright and a little smoky. The classics are always available, but the house list is where the room gets its personality.</p><Link className="pill" href="/reservations">Book dinner & drinks</Link></div>
        </div>
      </section>
    </>
  );
}
