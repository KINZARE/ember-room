import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const siteSource = await readFile(new URL('../lib/site.ts', import.meta.url), 'utf8');

test('LOW EMBER venue config contains the canonical brand and routes', () => {
  assert.match(siteSource, /LOW EMBER/);
  assert.match(siteSource, /Scheepvaartkwartier/);
  assert.match(siteSource, /Thursday[^\n]*17:30[^\n]*00:30/);
  assert.match(siteSource, /Sunday[^\n]*17:30[^\n]*23:30/);
  assert.match(siteSource, /\/private-nights/);
  assert.match(siteSource, /\/dietary/);
});

test('LOW EMBER public config removes fabricated street and contact data', () => {
  assert.doesNotMatch(siteSource, /Wijnhaven 42/);
  assert.doesNotMatch(siteSource, /hello@emberroom\.example/);
});

const homeSource = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
const footerSource = await readFile(new URL('../components/SiteFooter.tsx', import.meta.url), 'utf8');

test('homepage presents the LOW EMBER proposition and private nights path', () => {
  assert.match(homeSource, /Fire after dark\./);
  assert.match(homeSource, /Records after ten/i);
  assert.match(homeSource, /\/private-nights/);
});

test('footer never exposes portfolio/demo disclaimers to guests', () => {
  assert.doesNotMatch(footerSource, /Fictional hospitality concept/i);
  assert.doesNotMatch(footerSource, /Portfolio project/i);
});

const menuSource = await readFile(new URL('../app/menu/page.tsx', import.meta.url), 'utf8');
const storySource = await readFile(new URL('../app/story/page.tsx', import.meta.url), 'utf8');

test('menu exposes dietary guidance and the expanded menu system', () => {
  assert.match(menuSource, /\/dietary/);
  assert.match(menuSource, /menuSections/);
  assert.match(siteSource, /Zero proof/);
  assert.doesNotMatch(menuSource, /Sample menu|fictional portfolio/i);
});

test('story is guest-facing and explains the LOW EMBER philosophy', () => {
  assert.doesNotMatch(storySource, /fictional story/i);
  assert.match(storySource, /fire/i);
  assert.match(storySource, /low light/i);
  assert.match(storySource, /records/i);
});

const privateNightsUrl = new URL('../app/private-nights/page.tsx', import.meta.url);
const dietaryUrl = new URL('../app/dietary/page.tsx', import.meta.url);

test('Private Nights route exists and sells formats without fake proof', async () => {
  assert.equal(existsSync(privateNightsUrl), true);
  const source = await readFile(privateNightsUrl, 'utf8');
  assert.match(source, /privateNightFormats/);
  assert.match(source, /\/reservations/);
  assert.doesNotMatch(source, /testimonial|sold out|clients served|events hosted/i);
});

test('Dietary route exists and communicates allergy handling without guarantees', async () => {
  assert.equal(existsSync(dietaryUrl), true);
  const source = await readFile(dietaryUrl, 'utf8');
  assert.match(source, /dietaryNotes/);
  assert.match(source, /cross-contact/i);
  assert.match(source, /reservation/i);
  assert.doesNotMatch(source, /guarantee|100% safe|allergen-free/i);
});
