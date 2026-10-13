import type { Metadata } from "next";
import { ReservationForm } from "@/components/ReservationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Reservations", description: "Request a table at Ember Room." };

export default function ReservationsPage() {
  return (
    <>
      <section className="page-hero page-hero--reservations">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">Reservations</p><h1>Make a night <em>of it.</em></h1></div>
          <div className="page-hero__aside"><p>Tables are available Thursday through Sunday. For groups larger than six, this fictional concept would normally route you to the restaurant directly.</p></div>
        </div>
      </section>

      <section className="section reservation-section">
        <div className="shell reservation-grid">
          <div className="reservation-card"><ReservationForm /></div>
          <aside className="reservation-aside">
            <div className="image-frame image-frame--aside"><img src={site.heroImage} alt="Candlelit restaurant tables" /></div>
            <div><p className="eyebrow">Good to know</p><h2>Relaxed table times. Walk-ins at the bar.</h2><p>We keep part of the room free for spontaneous nights. If your preferred time is full, come by for a drink and we will do our best.</p></div>
            <dl><div><dt>Kitchen</dt><dd>17:30–23:00</dd></div><div><dt>Bar</dt><dd>until 01:00 Thu–Sat</dd></div><div><dt>Address</dt><dd>{site.address}</dd></div></dl>
          </aside>
        </div>
      </section>
    </>
  );
}
