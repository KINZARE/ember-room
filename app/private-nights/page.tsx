import type { Metadata } from "next";
import Link from "next/link";
import { privateNightFormats, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Nights",
  description: "Long-table dinners, brand nights and full-room evenings at LOW EMBER.",
};

export default function PrivateNightsPage() {
  return (
    <>
      <section className="page-hero page-hero--private">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">Private Nights</p><h1>Your people.<br /><em>Our room.</em></h1></div>
          <div className="page-hero__aside"><p>For groups that want more than a table but less than an event hall: fire-led food, a useful bar and a room that can carry the night.</p></div>
        </div>
      </section>

      <section className="section private-formats">
        <div className="shell">
          <div className="section-head"><div><p className="eyebrow">Choose the shape</p><h2>Three ways to take the room.</h2></div><p className="section-note section-note--dark">We shape menu, drinks and pace around what the evening needs.</p></div>
          <div className="private-formats__grid">
            {privateNightFormats.map((format, index) => (
              <article key={format.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{format.title}</h3>
                <p>{format.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="private-night-visual">
        <img src={site.roomImage} alt="LOW EMBER room prepared for a private evening" />
        <div className="private-night-visual__veil" />
        <div className="shell private-night-visual__content">
          <p className="eyebrow eyebrow--light">Built around the room</p>
          <h2>No lanyards.<br />No ballroom energy.</h2>
          <p>Start seated, loosen the room later, keep the bar useful throughout. The format should follow the people, not the other way around.</p>
        </div>
      </section>

      <section className="section private-inquiry">
        <div className="shell private-inquiry__grid">
          <div><p className="eyebrow">Start the conversation</p><h2>Tell us what the night needs.</h2></div>
          <div><p className="lead lead--small">Use the reservation flow for a first request and add the group or occasion in the note. A real client handover can connect this to email, CRM or a booking platform.</p><Link className="pill pill--ember" href="/reservations">Start a request</Link></div>
        </div>
      </section>
    </>
  );
}
