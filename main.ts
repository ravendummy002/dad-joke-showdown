// Dad Joke Showdown — entry program.
// Writes one dad joke to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
// The joke: a father who cannot stop himself from baking puns into
// every conversation — the groan is the whole point.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked me to stop making bread puns. I said, 'Sorry, I'm on a roll. I knead to finish.'";

// Guard the gate before writing: 1–200 chars, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || !/\S/.test(JOKE)) {
  throw new Error("entry joke fails the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8"); // no trailing newline
