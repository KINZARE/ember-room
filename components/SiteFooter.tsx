import Link from "next/link";
import { hours, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <div className="site-footer__brand">
          <p className="eyebrow eyebrow--light">{site.location}</p>
          <h2>Stay for one more.</h2>
          <Link className="pill pill--ember" href="/reservations">Reserve a table</Link>
        </div>
        <div className="site-footer__columns">
          <div>
            <p className="footer-label">Hours</p>
            {hours.map((item) => <p key={item.day}>{item.day}<br /><strong>{item.value}</strong></p>)}
          </div>
          <div>
            <p className="footer-label">Explore</p>
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <p className="footer-label">Find us</p>
            <p>{site.location}</p>
            <p>{site.locationNote}</p>
            <span className="footer-handle">{site.instagram}</span>
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>LOW LIGHT · HIGH HEAT</span>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
