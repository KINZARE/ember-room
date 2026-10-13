import type { Metadata } from "next";
import Link from "next/link";
import { dietaryNotes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dietary & Allergies",
  description: "How LOW EMBER handles dietary preferences and allergy information.",
};

export default function DietaryPage() {
  return (
    <>
      <section className="page-hero page-hero--dietary">
        <div className="shell page-hero__grid">
          <div><p className="eyebrow">Dietary & allergies</p><h1>Tell us <em>before the fire.</em></h1></div>
          <div className="page-hero__aside"><p>The smaller the menu, the more useful clear information becomes. Share what you need during reservation and the kitchen can assess the best route before service.</p></div>
        </div>
      </section>

      <section className="section dietary-section">
        <div className="shell dietary-grid">
          <div>
            <p className="eyebrow">How we approach it</p>
            <h2>Clear notes beat assumptions.</h2>
            <p className="lead lead--small">Our kitchen works with shared equipment and common allergens, so cross-contact is possible. The right next step is always to tell us exactly what matters to you.</p>
          </div>
          <div className="dietary-notes">
            {dietaryNotes.map((note, index) => (
              <article key={note}><span>{String(index + 1).padStart(2, "0")}</span><p>{note}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soot dietary-cta">
        <div className="shell dietary-cta__grid">
          <div><p className="eyebrow eyebrow--light">Before you book</p><h2>Add the detail to your reservation.</h2></div>
          <div><p>Use the note field for allergies, dietary preferences or access needs. It gives the kitchen a clear starting point before service.</p><Link className="pill pill--light" href="/reservations">Go to reservations</Link><span>{site.location}</span></div>
        </div>
      </section>
    </>
  );
}
