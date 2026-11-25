import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "My agent confidently fixed my bug, apologized for the fix, then confidently fixed the apology.";

// Gate guard: one line, 1–140 chars, not only whitespace.
if (TEXT.includes("\n") || TEXT.length < 1 || TEXT.length > 140 || TEXT.trim().length === 0) {
  throw new Error(`entry violates the gate: ${TEXT.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${outDir}/entry.txt`);
