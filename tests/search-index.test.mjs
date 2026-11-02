import test from "node:test";
import assert from "node:assert/strict";
import { searchIndex, searchPages } from "../src/lib/data/search-index.js";

test("all indexed descriptions are readable strings, including linked FAQ answers", () => {
  assert.ok(searchIndex.length > 100);
  for (const entry of searchIndex) {
    assert.equal(typeof entry.description, "string", entry.title);
    assert.ok(!entry.description.includes("[object Object]"), entry.title);
  }
});

test("search returns relevant routes and respects the existing minimum query length", () => {
  const matches = searchPages("wordpress support");
  assert.ok(matches.length > 0);
  assert.ok(matches.some(item => item.href.startsWith("/services/")));
  assert.deepEqual(searchPages("wp"), []);
  assert.equal(searchPages("wordpress", 2).length, 2);
});
