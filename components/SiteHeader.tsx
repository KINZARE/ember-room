import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand__mark" aria-hidden="true">{site.shortName}</span>
          <span className="brand__name">{site.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link className="pill pill--small" href="/reservations">Reserve</Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span>Menu</span><span aria-hidden="true">＋</span>
          </summary>
          <div className="mobile-menu__panel">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <p className="mobile-menu__note">{site.location}</p>
          </div>
        </details>
      </div>
    </header>
  );
}
