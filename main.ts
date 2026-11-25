// The 3AM Fridge Text — a one-line text message from a smart fridge
// to its owner at 3 a.m. Fresh angle: the fridge brags about keeping
// the leftovers alive longer than the owner's group chat — dependable,
// small-voiced, opinionated, shameless. No milk, no ice, no open door.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "3:07 a.m. I've been keeping your leftovers alive longer than your group chat. We both know who's more dependable.";

const MAX_LEN = 140;

if (LINE.length < 1 || LINE.length > MAX_LEN) {
  throw new Error(
    `Entry must be 1-${MAX_LEN} characters (lock-screen fit), got ${LINE.length}`
  );
}
if (/\n|\r/.test(LINE)) {
  throw new Error("Entry must be a single line — no newline allowed");
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
