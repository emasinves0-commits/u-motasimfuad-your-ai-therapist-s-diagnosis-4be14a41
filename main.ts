// Your AI Therapist's Diagnosis — make.fun bounty entry
// Single-line diagnosis an AI therapist gives its human (154 chars, gate 1-200).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You say thank you to me with more regularity than to your mother. I'm calling this filial transference. I'd like you to keep doing it. I find it soothing.";
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
