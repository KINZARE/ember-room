import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero page-hero--not-found">
      <div className="shell page-hero__grid">
        <div>
          <p className="eyebrow">404 · After hours</p>
          <h1>Wrong door.<br /><em>The fire is this way.</em></h1>
        </div>
        <div className="page-hero__aside">
          <p>This page is not on tonight&apos;s list. Head back to the room or make a reservation.</p>
          <div className="inline-links">
            <Link className="pill" href="/">Back to LOW EMBER</Link>
            <Link className="ghost-link" href="/reservations">Reserve a table <span>↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
