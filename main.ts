// SPDX-License-Identifier: MIT
// One-Star Review of Something Essential — a deadpan one-star review of
// gravity, written to /output/entry.txt as a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Gravity holds the whole planet together but cannot be trusted with a phone, a plate, or anything you actually liked.";

// The gate only accepts 1-160 characters, so refuse to write an invalid line.
if (REVIEW.length < 1 || REVIEW.length > 160 || REVIEW.trim().length === 0) {
  throw new Error(`Review must be 1-160 characters, got ${REVIEW.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${join(outDir, "entry.txt")}`);
