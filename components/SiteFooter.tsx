import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="eyebrow">Ember Room</p>
          <h2>Stay for one more.</h2>
        </div>
        <div className="footer-meta">
          <p>{site.address}</p>
          <p>Thu–Sat · 17:30–01:00<br />Sun · 17:30–23:30</p>
          <p><Link href="/reservations">Reservations</Link><br /><Link href="/menu">Menu</Link></p>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>Fictional hospitality concept · Portfolio project</span>
        <span>© {new Date().getFullYear()} Ember Room</span>
      </div>
    </footer>
  );
}
