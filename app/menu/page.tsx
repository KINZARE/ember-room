import type { Metadata } from "next";
import Link from "next/link";
import { menuSections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: "Open-fire plates, late bites, house cocktails and zero-proof drinks at LOW EMBER.",
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero page-hero--menu">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Food & drinks</p>
            <h1>Low light.<br /><em>High heat.</em></h1>
          </div>
          <div className="page-hero__aside">
            <p>A compact menu made to move with the room: open-fire plates first, late bites when the table wants one more thing, drinks that hold their own beside dinner.</p>
            <p className="tiny-note">Menu changes with produce, fire and season.</p>
          </div>
        </div>
      </section>

      <section className="section menu-page">
        <div className="shell menu-page__grid">
          {menuSections.map((section, index) => (
            <section className="menu-page__section" key={section.title}>
              <div className="menu-page__heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h2>{section.title}</h2><p>{section.note}</p></div>
              </div>
              <div className="menu-page__items">
                {section.items.map(([name, desc, price]) => (
                  <div className="menu-row menu-row--large" key={name}>
                    <div><strong>{name}</strong><span>{desc}</span></div><span>€{price}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="menu-visual section section--soot">
        <div className="shell menu-visual__grid">
          <div className="menu-visual__image"><img src={site.drinkImage} alt="House cocktail in LOW EMBER's warm bar light" /></div>
          <div className="menu-visual__copy">
            <p className="eyebrow eyebrow--light">At the bar</p>
            <h2>Classic bones. House rules.</h2>
            <p>We like drinks dry, bright and direct. Smoke shows up when it earns a place, not because the room has a theme.</p>
            <div className="inline-links">
              <Link className="pill pill--light" href="/reservations">Reserve dinner & drinks</Link>
              <Link className="ghost-link ghost-link--light" href="/dietary">Dietary & allergy notes <span>↗</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
