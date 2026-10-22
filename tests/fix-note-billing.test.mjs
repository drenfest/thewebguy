import test from 'node:test';
import assert from 'node:assert/strict';
import { fixNotes, fixNoteMap, fixNoteCategories, getRelatedFixNotes } from '../src/lib/data/fix-notes.js';
import { additionalFixNotes } from '../src/lib/data/additional-fix-notes.js';
import { fixNoteBilling, formatFixNoteCharge } from '../src/lib/data/fix-note-billing.js';

test('historical amounts preserve cents and are not inferred for unmatched notes', () => {
  assert.equal(formatFixNoteCharge(fixNoteMap['fixed-contact-form-email-delivery-authenticated-sending'].billing), '$75.00');
  assert.equal(formatFixNoteCharge(fixNoteMap['built-queued-form-to-crm-plugin-awaiting-credentials'].billing), '$191.25');
  assert.equal(formatFixNoteCharge(fixNoteMap['built-and-tested-editable-shopify-draft-navigation'].billing), '$455.00');
  assert.equal(fixNoteMap['built-local-first-workflow-app-session-continuity'].billing, null);
  assert.equal(formatFixNoteCharge(null), '');
});

test('every public amount has explicit scope and only public billing fields', () => {
  for (const [slug, billing] of Object.entries(fixNoteBilling)) {
    assert.ok(fixNoteMap[slug], slug);
    assert.ok(Number.isSafeInteger(billing.amountCents) && billing.amountCents >= 0, slug);
    assert.equal(billing.currency, 'USD');
    assert.ok(['itemized', 'bundle'].includes(billing.basis));
    assert.ok(billing.scope.length > 20, slug);
    assert.deepEqual(Object.keys(billing).sort(), ['amountCents', 'basis', 'currency', 'scope']);
  }
});

test('new notes retain pending work boundaries and omit private evidence fields', () => {
  assert.match(fixNoteMap['built-queued-form-to-crm-plugin-awaiting-credentials'].resultSummary, /no live CRM delivery/i);
  assert.match(fixNoteMap['redesigned-shopify-collection-page-in-draft-theme'].resultSummary, /unpublished pending approval/i);
  assert.match(fixNoteMap['prepared-git-managed-article-with-publication-blocked'].resultSummary, /unpublished/i);
  assert.match(fixNoteMap['investigated-form-events-with-incomplete-analytics-access'].resultSummary, /unverified/i);
  for (const note of additionalFixNotes) {
    assert.equal(note.date, '2026-10-21');
    assert.equal(note.screenshot, null);
    assert.ok(note.whatIChecked.length && note.whatIChanged.length && note.whatToWatchNext.length);
    assert.equal(note.billing, fixNoteBilling[note.slug]);
    assert.ok(!Object.keys(note).some(key => /invoice|client|sourceFile|repository|credential/i.test(key)), note.slug);
    assert.ok(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(JSON.stringify(note)), note.slug);
    assert.ok(!/https?:\/\//i.test(JSON.stringify(note)), note.slug);
  }
});

test('archive, categories and related notes include the added work without duplicate routes', () => {
  assert.equal(new Set(fixNotes.map(n => n.slug)).size, fixNotes.length);
  assert.equal(fixNotes.length, 163);
  assert.equal(fixNotes.filter(n => n.billing).length, 147);
  assert.equal(fixNoteCategories.reduce((sum, c) => sum + c.notes.length, 0), fixNotes.length);
  for (const note of additionalFixNotes) {
    assert.ok(getRelatedFixNotes(note).every(other => other.slug !== note.slug));
  }
});
