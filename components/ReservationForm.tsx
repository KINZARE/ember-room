"use client";

import { FormEvent, useState } from "react";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="reservation-success" role="status">
        <p className="eyebrow">Request received</p>
        <h2>Your table is pencilled in.</h2>
        <p>This is a fictional portfolio demo, so no personal details were sent anywhere.</p>
        <button className="text-button" type="button" onClick={() => setSubmitted(false)}>Make another request</button>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Guests<select name="guests" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select></label>
        <label>Date<input name="date" type="date" required /></label>
        <label>Time<select name="time" defaultValue="20:00"><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option><option>21:30</option><option>22:00</option></select></label>
        <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label>
      </div>
      <label>Anything we should know?<textarea name="note" rows={4} placeholder="Dietary needs, celebration, accessibility…" /></label>
      <div className="form-actions">
        <button className="pill" type="submit">Request a table</button>
        <p>No payment required. Fictional demo only.</p>
      </div>
    </form>
  );
}
