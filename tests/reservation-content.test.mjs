import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../components/ReservationForm.tsx', import.meta.url), 'utf8');
const pageSource = await readFile(new URL('../app/reservations/page.tsx', import.meta.url), 'utf8');

test('reservation form stays client-only with no network submission', () => {
  assert.doesNotMatch(source, /fetch\s*\(/);
  assert.doesNotMatch(source, /axios/i);
  assert.doesNotMatch(source, /formAction/i);
  assert.doesNotMatch(source, /https?:\/\//i);
  assert.match(source, /preventDefault\(\)/);
});

test('reservation form exposes required booking and guest fields', () => {
  for (const field of ['guests', 'date', 'time', 'name', 'email']) assert.match(source, new RegExp(`name=["']${field}["']`));
  assert.match(source, /name=["']phone["']/);
  assert.match(source, /name=["']note["']/);
  assert.match(source, /Table request received/);
});

test('reservation page uses LOW EMBER operational context without demo language', () => {
  assert.match(pageSource, /hours/);
  assert.match(pageSource, /Walk-ins/i);
  assert.match(pageSource, /Scheepvaartkwartier|site\.location/);
  assert.doesNotMatch(pageSource, /fictional|demo/i);
});
