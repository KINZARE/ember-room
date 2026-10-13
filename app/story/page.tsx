import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Story", description: "The fictional story behind Ember Room." };

export default function StoryPage() {
  return (
    <>
      <section className="page-hero page-hero--story">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">Our story</p><h1>Made for the hour <em>after dinner.</em></h1></div>
          <div className="page-hero__aside"><p>Ember Room started with a simple idea: the best part of a night out often begins when nobody is looking at the clock anymore.</p></div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="shell editorial-grid">
          <div className="image-frame image-frame--tall"><img src={site.roomImage} alt="Entrance to a warm industrial bar" /></div>
          <div className="editorial-copy">
            <p className="eyebrow">The idea</p>
            <h2>A room between restaurant and bar.</h2>
            <p className="lead">We wanted the food to be serious without the room becoming formal, and the drinks to feel considered without turning the bar into a laboratory.</p>
            <p>The result is deliberately loose: a short menu from the fire, a compact cocktail list, loud records after ten and enough space at the bar for people who did not plan ahead.</p>
          </div>
        </div>
      </section>

      <section className="section principles">
        <div className="shell principles__grid">
          <div><span>01</span><h3>Cook with heat</h3><p>Char, smoke and direct fire do most of the talking.</p></div>
          <div><span>02</span><h3>Pour with purpose</h3><p>Short drinks, bright drinks and classics that still taste like themselves.</p></div>
          <div><span>03</span><h3>Keep the room human</h3><p>Good service, low ceremony and a seat for walk-ins whenever we can.</p></div>
        </div>
      </section>

      <section className="story-cta">
        <div className="shell story-cta__inner"><p className="eyebrow eyebrow--light">See you after dark</p><h2>Come for dinner.<br />Stay for the room.</h2><Link className="pill pill--light" href="/reservations">Book a table</Link></div>
      </section>
    </>
  );
}
