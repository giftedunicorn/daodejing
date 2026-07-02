# Dao De Jing For Founders

An open source AI mentor for founders who want to think more clearly under pressure. It uses the Dao De Jing and Taoist philosophy as a practical lens for startup judgment: what to build, what to ignore, when to push, when to stop, and where the real market current is moving.

The premise is simple: founders do not only need more tactics. They need better perception. In a market where AI demos are cheap, attention is noisy, and competitors can copy features quickly, the real edge is often clarity about users, timing, restraint, leverage, and distribution.

This project is a practical experiment in applying Daoist thinking to modern AI startup strategy.

## Why This Exists

In 2026, the hard part of an AI startup is no longer simply getting access to models or shipping a demo. The hard part is judgment:

- choosing a real customer and workflow instead of chasing every AI trend
- finding product-market fit before scaling noise
- building an MVP that tests the core risk, not the founder's ego
- earning distribution, trust, and retention when competitors can copy features quickly
- staying clear when fundraising news, founder mode discourse, and market hype distort the signal

The Dao De Jing is useful here because it is not a motivational book. It is a compact operating philosophy about reality, timing, restraint, leverage, and alignment. Those are startup problems.

## The Core Idea

This app reframes Daoist philosophy as a founder decision system:

- **Dao** is market reality: users, timing, workflow, budget, and constraints.
- **De** is earned power: product trust, founder discipline, team capability, and reputation.
- **Wu wei** is not doing nothing; it is execution without wasted motion.
- **Non-contention** is not avoiding competition; it is refusing the wrong battlefield.
- **Water-like strategy** means flowing toward real pain, real budgets, and real adoption paths.
- **Knowing when to stop** means cutting features, segments, channels, or narratives that no longer serve the company.

The goal is not spiritual language. The goal is better startup judgment.

## Why Daoism Belongs In A Founder Tool

Most startup advice teaches founders to move faster, talk to users, ship, iterate, and find distribution. That advice is still necessary. But it often assumes the founder can already see the situation clearly.

The Dao De Jing starts one layer deeper. It asks whether the action matches reality. It makes room for timing, silence, asymmetry, restraint, non-obvious leverage, and the cost of forcing. That makes it surprisingly useful for founders trying to separate signal from panic.

This project treats Daoist philosophy as a way to sharpen operating judgment, not as decoration.

## What You Can Ask

Use it as a startup mentor, AI founder advisor, or strategy sparring partner for questions like:

- My AI product has no PMF. Should I keep going, pivot, or kill it?
- What should be in the MVP, and what should I stop building?
- Is our growth problem caused by traffic, positioning, conversion, retention, or weak product value?
- How do I choose a wedge when larger AI startup companies can copy features?
- Is fundraising helping the strategy, or hiding that the business is not working?
- How do I stay clear as a founder when competitors, hype, and investor narratives create pressure?

## Features

- ChatGPT-style streaming chat interface
- Founder-advisor system prompt grounded in the Dao De Jing and AI startup practice
- Starter prompts for PMF, MVP, growth, competition, and fundraising anxiety
- Next.js App Router, React, TypeScript, Tailwind CSS, Vercel AI SDK, and OpenAI
- Railway-ready deployment with `railway.json`
- No accounts, no database, and no persistent chat history in the first version

## Dao De Jing Texts

The repo also includes reference documents:

- [`docs/daodejing.md`](docs/daodejing.md): Chinese Dao De Jing text
- [`docs/daodejing-translation.md`](docs/daodejing-translation.md): Chinese natural-language translation
- [`docs/daodejing-translation-en.md`](docs/daodejing-translation-en.md): English translation

## Local Setup

```bash
pnpm install
cp .env.example .env.local
```

Set `OPENAI_API_KEY` in `.env.local`.

Optional:

```bash
OPENAI_MODEL=gpt-4.1-mini
```

Run locally:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Verification

```bash
pnpm test
pnpm lint
pnpm build
```

`pnpm lint` runs TypeScript checking for this small app.

## Deploy To Railway

1. Create a Railway project from this GitHub repo.
2. Add environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL` optional, defaults to `gpt-4.1-mini`
3. Railway uses `railway.json`:
   - Build: `pnpm install --frozen-lockfile && pnpm build`
   - Start: `pnpm start`

## Disclaimer

This project provides startup education, founder reflection, and strategic thinking support. It does not provide legal, financial, tax, investment, medical, or mental health advice.
