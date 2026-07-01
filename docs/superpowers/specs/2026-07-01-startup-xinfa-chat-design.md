# Startup Xinfa Chat Design

## Goal

Build a ChatGPT-style web app where users can chat with a startup philosophy mentor. The agent combines Dao De Jing, Daoist thinking, AI startup practice, and internet/startup concepts such as MVP, PMF, traffic, growth, positioning, and founder psychology. The app must support a streamable chat box and be deployable on Railway.

## Product Shape

The first screen is the chat product, not a marketing landing page. The user should immediately understand that this is a practical founder-advisor chat tool: calm, direct, and useful for real startup confusion.

The interface has three primary regions:

- A narrow context rail with product identity, advisor mode, and starter questions.
- A central conversation area with assistant and user messages.
- A bottom composer with a stable textarea, submit button, loading state, and stop/regenerate-friendly structure.

Starter prompts should cover common startup dilemmas:

- AI product has no PMF: continue, pivot, or kill?
- What should be excluded from an MVP?
- Is growth blocked by traffic, positioning, or product value?
- How should a founder handle competitor and fundraising anxiety?

## Agent Behavior

The app uses the existing `dao.prompt.ts` as the starting point for the system prompt, moved into app code under `lib/prompts/startup-xinfa.ts`.

The agent must behave like a senior founder-advisor, not a generic spiritual assistant. Daoist concepts are used as operating principles:

- Dao: real market, user, timing, and organizational patterns.
- De: accumulated trust, product power, and founder discipline.
- Wu wei: focused action without wasteful forcing.
- Non-contention: avoiding the wrong battlefield rather than avoiding competition.
- Water-like strategy: flowing toward real user pain, budget, and workflow.

Each answer should usually contain a direct judgment, the underlying structure of the problem, a Daoist/startup principle, and one to three next actions. The agent should avoid mystical filler, generic founder slogans, and empty motivational language.

## Technical Architecture

Use a single Next.js App Router application in the repository root.

Recommended stack:

- Next.js with TypeScript for app and API route.
- Vercel AI SDK for chat state, UI message streaming, and server stream handling.
- OpenAI provider for model access.
- Tailwind CSS for styling.
- Railway config for deployment.

The backend chat endpoint lives at `app/api/chat/route.ts`. It receives conversation messages from the frontend, injects the startup xinfa system prompt, calls the model with streaming enabled, and returns a streamed response compatible with the frontend chat hook.

The frontend chat UI lives in `app/page.tsx` and focused components under `components/chat/`.

## Data And Secrets

No database is required for the first version. Conversations are local to the current browser session.

Environment variables:

- `OPENAI_API_KEY`: required for chat responses.
- `OPENAI_MODEL`: optional; defaults to a current small/fast production model.

The app must include `.env.example` documenting these variables. Secrets must not be committed.

## Deployment

Railway should be able to build and run the app with standard Node commands:

- `pnpm install`
- `pnpm build`
- `pnpm start`

Add `railway.json` to make the build and start commands explicit.

## Error Handling

The chat endpoint should return clear HTTP errors when `OPENAI_API_KEY` is missing or the model call fails.

The UI should show a useful inline error message instead of silently failing. The send button should be disabled while no message is present or a response is streaming.

## Accessibility And Responsiveness

The UI must work on desktop and mobile. The composer must remain reachable on mobile. Text must not overflow buttons or message containers. Inputs need visible labels or accessible labels. The app should support light and dark modes through CSS variables or media preference.

## Testing And Verification

Minimum verification before completion:

- Install dependencies successfully.
- Run lint/type checks available in the scaffold.
- Build the Next.js app successfully.
- Run a local dev server.
- Verify the page renders in a browser.
- Verify `/api/chat` handles missing API key predictably.
- If an API key is available, verify streamed chat output in the UI.

## Out Of Scope For First Version

- User accounts.
- Persistent chat history.
- Vector search/RAG over the full Dao De Jing.
- Billing.
- Multi-agent workflows.
- Admin panel.
