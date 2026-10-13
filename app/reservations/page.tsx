import type { Metadata } from "next";
import Link from "next/link";
import { ReservationForm } from "@/components/ReservationForm";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Request a table for dinner and drinks at LOW EMBER in Rotterdam.",
};

export default function ReservationsPage() {
  return (
    <>
      <section className="page-hero page-hero--reservations">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">Reservations</p><h1>Make a night <em>of it.</em></h1></div>
          <div className="page-hero__aside"><p>Book dinner from Thursday through Sunday. The bar keeps a little room for spontaneity, so Walk-ins are welcome when seats open up.</p></div>
        </div>
      </section>

      <section className="section reservation-section">
        <div className="shell reservation-grid">
          <div className="reservation-card"><ReservationForm /></div>
          <aside className="reservation-aside">
            <div className="reservation-aside__image"><img src={site.heroImage} alt="LOW EMBER tables in warm low light" /></div>
            <div>
              <p className="eyebrow">Good to know</p>
              <h2>Low pressure. Late enough.</h2>
              <p>We keep the pace relaxed and part of the bar flexible. If your exact time is unavailable, another slot or a walk-in drink is usually the best next move.</p>
            </div>
            <dl>
              {hours.map((item) => <div key={item.day}><dt>{item.day}</dt><dd>{item.value}</dd></div>)}
              <div><dt>Location</dt><dd>{site.location}</dd></div>
            </dl>
            <p className="aside-note">Dietary needs? Add them to your request or read our <Link href="/dietary">dietary notes</Link>.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
