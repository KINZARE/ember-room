import Link from "next/link";
import { nav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label="Ember Room home">
          <span className="brand__mark">ER</span>
          <span className="brand__name">Ember Room</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link className="pill pill--small" href="/reservations">Book a table</Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open menu"><span>Menu</span><span aria-hidden="true">↗</span></summary>
          <div className="mobile-menu__panel">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link className="pill" href="/reservations">Book a table</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
