import Link from "next/link";
import { hours, menuSections, site } from "@/lib/site";

const signatures = [
  { label: "Fire", title: "Live flame, not theatre.", image: site.foodImage, alt: "Fire-led cooking in warm low light" },
  { label: "Drinks", title: "Cold, sharp, built for dinner.", image: site.drinkImage, alt: "Cocktail on a dark bar" },
  { label: "Room", title: "Records after ten.", image: site.roomImage, alt: "Warm late-night listening room" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home">
        <img className="hero__image" src={site.heroImage} alt="LOW EMBER dining room in warm low light" />
        <div className="hero__veil" />
        <div className="shell hero__content">
          <div className="hero__wordmark" aria-hidden="true">LOW EMBER</div>
          <p className="eyebrow eyebrow--light">Open-fire kitchen · cocktails · listening room</p>
          <h1>Fire after dark.</h1>
          <p className="hero__intro">Open-fire plates. Cold drinks. Records after ten. A late room in Rotterdam for dinner that does not need to end on schedule.</p>
          <div className="hero__actions">
            <Link className="pill pill--light" href="/reservations">Reserve a table</Link>
            <Link className="ghost-link ghost-link--light" href="/menu">See tonight&apos;s menu <span>↗</span></Link>
          </div>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <span>LOW LIGHT · HIGH HEAT · SIDE B AFTER TEN · ROTTERDAM · </span>
          <span>LOW LIGHT · HIGH HEAT · SIDE B AFTER TEN · ROTTERDAM · </span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell intro-grid reveal">
          <p className="eyebrow">The proposition</p>
          <div>
            <h2>Dinner without the ceremony. Drinks without the performance.</h2>
            <p className="lead">LOW EMBER sits somewhere between a fire kitchen, a neighbourhood bar and a listening room. The food is focused. The lights stay low. The records get louder when the plates are cleared.</p>
          </div>
        </div>
      </section>

      <section className="signature-section section section--soot">
        <div className="shell">
          <div className="section-head section-head--light">
            <div><p className="eyebrow eyebrow--light">Three reasons to stay</p><h2>Heat. Cold glass. Side B.</h2></div>
            <p className="section-note">Come for one of them. Usually leave after all three.</p>
          </div>
          <div className="signature-grid">
            {signatures.map((item, index) => (
              <article className={`signature-card signature-card--${index + 1}`} key={item.label}>
                <div className="signature-card__image"><img src={item.image} alt={item.alt} /></div>
                <div className="signature-card__meta"><span>{String(index + 1).padStart(2, "0")} · {item.label}</span><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-preview">
        <div className="shell">
          <div className="section-head">
            <div><p className="eyebrow">From the room</p><h2>The kitchen burns late.</h2></div>
            <Link className="pill pill--outline" href="/menu">Full menu</Link>
          </div>
          <div className="menu-preview__grid">
            {menuSections.slice(0, 3).map((section) => (
              <div className="menu-block" key={section.title}>
                <p className="menu-block__note">{section.note}</p>
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

      <section className="after-ten">
        <img src={site.roomImage} alt="Listening room details at LOW EMBER" />
        <div className="after-ten__veil" />
        <div className="shell after-ten__content">
          <p className="eyebrow eyebrow--light">Records after ten</p>
          <h2>Come for dinner.<br />Stay for side B.</h2>
          <p>After the kitchen settles, the room changes gear: records on, lights lower, another round if you want it.</p>
          <Link className="ghost-link ghost-link--light" href="/story">Why we built it this way <span>↗</span></Link>
        </div>
      </section>

      <section className="section private-teaser section--bone">
        <div className="shell private-teaser__grid">
          <div><p className="eyebrow">Private Nights</p><h2>Your people. Our room. No conference lighting.</h2></div>
          <div>
            <p className="lead lead--small">Long-table dinners, brand nights and full-room evenings shaped around fire, drinks and sound.</p>
            <Link className="pill" href="/private-nights">Explore Private Nights</Link>
          </div>
        </div>
      </section>

      <section className="section visit-section">
        <div className="shell visit-grid">
          <div>
            <p className="eyebrow">Visit</p>
            <h2>{site.location}</h2>
            <p className="visit-note">{site.locationNote}</p>
          </div>
          <div className="visit-meta">
            {hours.map((item) => <p key={item.day}><strong>{item.day}</strong><br />{item.value}</p>)}
            <p><strong>Walk-ins</strong><br />Bar seats when we can.</p>
          </div>
          <div className="visit-cta"><Link className="pill pill--ember" href="/reservations">Reserve your night</Link></div>
        </div>
      </section>
    </>
  );
}
