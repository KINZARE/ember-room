import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

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
