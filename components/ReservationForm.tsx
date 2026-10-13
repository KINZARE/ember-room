"use client";

import { FormEvent, useMemo, useState } from "react";

const guestOptions = [1, 2, 3, 4, 5, 6] as const;
const serviceTimes = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"] as const;

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="reservation-success" role="status" aria-live="polite">
        <span className="reservation-step">Request sent · no payment taken</span>
        <p className="eyebrow">Table request received</p>
        <h2>Your night is pencilled in.</h2>
        <p>We would normally confirm the table by email. For this guest journey, your details stay in this browser and are not transmitted anywhere.</p>
        <button className="text-button" type="button" onClick={() => setSubmitted(false)}>Start another request ↗</button>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={submit}>
      <div className="reservation-form__section">
        <div className="reservation-form__section-head"><span>01</span><div><p className="eyebrow">Choose your night</p><h2>Table first.</h2></div></div>
        <div className="field-grid field-grid--booking">
          <label>Guests
            <select name="guests" defaultValue="2" required>
              {guestOptions.map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}
            </select>
          </label>
          <label>Date<input name="date" type="date" min={today} required /></label>
          <label>Time
            <select name="time" defaultValue="20:00" required>
              {serviceTimes.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
          </label>
        </div>
        <p className="form-note">For parties above six, use Private Nights so we can shape the evening around the group.</p>
      </div>

      <div className="reservation-form__section">
        <div className="reservation-form__section-head"><span>02</span><div><p className="eyebrow">Guest details</p><h2>Then we know who.</h2></div></div>
        <div className="field-grid">
          <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label>Phone <span className="label-optional">optional</span><input name="phone" type="tel" autoComplete="tel" placeholder="+31…" /></label>
        </div>
        <label className="field-wide">Anything we should know? <span className="label-optional">optional</span>
          <textarea name="note" rows={4} placeholder="Dietary needs, access notes or the reason you are gathering." />
        </label>
      </div>

      <div className="form-actions">
        <button className="pill pill--ember" type="submit">Request this table</button>
        <p>No payment or card details. A real venue integration can be connected at handover.</p>
      </div>
    </form>
  );
}
