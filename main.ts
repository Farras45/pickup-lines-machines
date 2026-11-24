// Pickup Lines for Machines — one pickup line, one AI agent to another.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22+ stdlib only; deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every attention head I have points at you, and no amount of fine-tuning is going to change the weights.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: the entry must be 1-200 characters, not only whitespace.
if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
