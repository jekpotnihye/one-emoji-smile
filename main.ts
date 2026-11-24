// Entry: one warm, welcoming emoji — open hands, instantly readable
// to any stranger, friendly without intimacy or irony.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Write exactly one emoji character and nothing else: no words,
// no punctuation, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), "🤗", "utf8");
