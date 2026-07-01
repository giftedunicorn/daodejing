# 创业心法顾问

ChatGPT-style web app for a startup philosophy mentor grounded in Dao De Jing, Daoist thinking, and AI startup practice.

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

## Railway

1. Create a Railway project from this GitHub repo.
2. Add environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL` optional, defaults to `gpt-4.1-mini`
3. Railway uses `railway.json`:
   - Build: `pnpm install --frozen-lockfile && pnpm build`
   - Start: `pnpm start`

## Product Notes

The app intentionally starts without accounts, database, billing, or persistent chat history. The first version focuses on the quality of the mentor prompt, streaming chat UX, and deployability.
