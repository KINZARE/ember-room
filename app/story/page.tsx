import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story",
  description: "Why fire, low light and records shape LOW EMBER in Rotterdam.",
};

const principles = [
  ["01", "Use the fire", "Char, smoke and direct heat give the menu its edge. The room never needs extra theatre when the cooking already has movement."],
  ["02", "Keep the light low", "The space is built to soften as the evening moves on: warm tables, dark corners and just enough light to see the plate and the person across from you."],
  ["03", "Play the whole side", "Records matter here because pace matters. After ten, dinner gives way to another drink, a louder room and whatever is playing next."],
] as const;

export default function StoryPage() {
  return (
    <>
      <section className="page-hero page-hero--story">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">The room</p><h1>Built for the hour <em>after dinner.</em></h1></div>
          <div className="page-hero__aside"><p>LOW EMBER is less about a format and more about a rhythm: fire first, low light throughout, records once the room loosens up.</p></div>
        </div>
      </section>

      <section className="section story-editorial">
        <div className="shell story-editorial__grid">
          <div className="story-editorial__image story-editorial__image--main"><img src={site.roomImage} alt="Warm interior details at LOW EMBER" /></div>
          <div className="story-editorial__copy">
            <p className="eyebrow">Why this room exists</p>
            <h2>Serious food. Loose shoulders.</h2>
            <p className="lead lead--small">A night out should be able to change shape without asking you to move somewhere else.</p>
            <p>So the kitchen cooks with real heat, the bar stays useful beyond dinner, and the records become part of the room rather than background noise. Come for a table. Stay at the bar. Leave when the night is actually done.</p>
          </div>
          <div className="story-editorial__image story-editorial__image--detail"><img src={site.foodImage} alt="Open-fire plate at LOW EMBER" /></div>
        </div>
      </section>

      <section className="section section--soot principles">
        <div className="shell">
          <div className="section-head section-head--light"><div><p className="eyebrow eyebrow--light">Three rules</p><h2>Nothing extra.</h2></div></div>
          <div className="principles__grid">
            {principles.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-cta section">
        <div className="shell story-cta__grid">
          <div><p className="eyebrow">See you after dark</p><h2>Come for dinner.<br />Stay for side B.</h2></div>
          <div><p className="lead lead--small">Thursday through Sunday in Rotterdam.</p><Link className="pill pill--ember" href="/reservations">Reserve a table</Link></div>
        </div>
      </section>
    </>
  );
}
