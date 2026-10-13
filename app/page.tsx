import Link from "next/link";
import { menuSections, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home">
        <img className="hero__image" src={site.heroImage} alt="Candlelit dining room at night" />
        <div className="hero__veil" />
        <div className="shell hero__content">
          <p className="eyebrow eyebrow--light">Rotterdam · after dark</p>
          <h1>Fire on the plate.<br /><em>Low light at the table.</em></h1>
          <p className="hero__intro">Ember Room is a late-night cocktail house and supper bar built around smoke, seasonal produce and the kind of evenings that run longer than planned.</p>
          <div className="hero__actions">
            <Link className="pill pill--light" href="/reservations">Book a table</Link>
            <Link className="ghost-link ghost-link--light" href="/menu">Explore the menu <span>↗</span></Link>
          </div>
        </div>
        <div className="hero__ticker" aria-hidden="true"><span>COCKTAILS · FIRE · LATE PLATES · ROTTERDAM · </span><span>COCKTAILS · FIRE · LATE PLATES · ROTTERDAM · </span></div>
      </section>

      <section className="intro-section section">
        <div className="shell split-intro">
          <p className="eyebrow">The room</p>
          <div>
            <h2>A neighbourhood bar dressed for a long night.</h2>
            <p className="lead">No tasting-menu theatre. No stiff white tablecloths. Just precise drinks, open-fire cooking and a room that gets warmer as the night moves on.</p>
          </div>
        </div>
      </section>

      <section className="image-story section section--sand">
        <div className="shell image-story__grid">
          <div className="image-frame image-frame--portrait"><img src={site.roomImage} alt="Warm, industrial bar interior" /></div>
          <div className="image-story__copy">
            <p className="eyebrow">Come as you are</p>
            <h2>Drinks first. Dinner later. Or the other way around.</h2>
            <p>Ember Room moves between cocktail bar and supper spot without making you choose. Drop in for a quick drink, settle in for dinner, or stay until the chairs start going up.</p>
            <Link className="ghost-link" href="/story">Read our story <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section menu-preview">
        <div className="shell">
          <div className="section-head">
            <div><p className="eyebrow">Tonight's menu</p><h2>Built around flame, acid and a little restraint.</h2></div>
            <Link className="pill pill--outline" href="/menu">Full menu</Link>
          </div>
          <div className="menu-preview__grid">
            {menuSections.map((section) => (
              <div className="menu-block" key={section.title}>
                <h3>{section.title}</h3>
                {section.items.slice(0, 3).map(([name, desc, price]) => (
                  <div className="menu-row" key={name}>
                    <div><strong>{name}</strong><span>{desc}</span></div><span>€{price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="full-image-callout">
        <img src={site.foodImage} alt="A plated dish in warm restaurant light" />
        <div className="full-image-callout__card">
          <p className="eyebrow eyebrow--light">Thursday through Sunday</p>
          <h2>One room. Four nights. No rush.</h2>
          <p>Tables open from 17:30. The kitchen runs late and the bar keeps going after dinner.</p>
          <Link className="pill pill--light" href="/reservations">Find a table</Link>
        </div>
      </section>

      <section className="section visit-section">
        <div className="shell visit-grid">
          <div><p className="eyebrow">Visit</p><h2>{site.address}</h2></div>
          <div className="visit-meta"><p><strong>Thu–Sat</strong><br />17:30–01:00</p><p><strong>Sunday</strong><br />17:30–23:30</p><p><strong>Walk-ins</strong><br />Always welcome at the bar</p></div>
        </div>
      </section>
    </>
  );
}
