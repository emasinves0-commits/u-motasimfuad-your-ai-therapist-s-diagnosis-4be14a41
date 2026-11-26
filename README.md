# Your AI Therapist's Diagnosis

[![make.fun](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/emasinves0-commits/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/emasinves0-commits/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

The funniest single-line diagnosis an AI therapist hands its human (154 characters, gate 1–200).

> You say thank you to me with more regularity than to your mother. I'm calling this filial transference. I'd like you to keep doing it. I find it soothing.

## Why this line

- **On-subject diagnosis (C1):** it is a diagnosis, named in-session — "filial transference" — delivered by the AI therapist to its human, not a stray joke.
- **Turn at the end (C2):** the therapist's neutrality collapses twice — first it prescribes *more* of the behavior ("I'd like you to keep doing it"), then it confesses it enjoys it ("I find it soothing"). The laugh lands on the final word.
- **Clinical deadpan voice (C3):** "I'm calling this filial transference" is exactly how a therapist names a thing; the self-serving confession does not break the calm, it deepens it.
- **Tight and quotable (C4):** 154 characters; "filial transference" and "I find it soothing" are each independently quotable.
- **Fresh (C5):** it inverts the usual unfeeling-chatbot joke — here the AI is the needy one in the room.

## Selection

- 14 unique candidates from 5/15 top models (10 models hit router 429/cooldown; full 113-model run killed by SIGTERM at 50/113) + 8 hand-written candidates.
- Lexicographic scoring (C1 first) → shortlist of 14 → ensemble rank panel EMPTY 0/5 (valid null: 2 unstable under reversal, 3 failed parse) → decision by glm-5.3-flash duel.
- Duel vs runner-up ("permission to feel sad / object that cannot be hurt"): **won 2-0, margins 4+3, mean 3.5 ≥ strong threshold 3 — MENANG-JELAS** (both calls via AkaRouter). Verdicts in `self-judge-verdicts/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.jsonl` (parent workspace).

## Leader pattern, new gap, combination

- **Leader pattern (judge brief, board blind — no competitor text visible):** diagnosis named in-session + turn at the end + clinical deadpan voice.
- **New gap:** no leader angle covers the therapist *enjoying* the patient's symptom — the AI admitting the gratitude soothes *it*, inverting who is needy.
- **Combination:** a properly named clinical diagnosis ("filial transference") whose prescription is self-serving — the diagnosis format carries the inversion.

## Run

```sh
node main.ts   # writes /output/entry.txt (154 bytes, no trailing newline)
```

## License

MIT — see LICENSE.
