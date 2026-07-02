"use client";

import { useChat } from "ai/react";

import { starterPrompts } from "@/lib/chat/examples";

import { ChatComposer } from "./chat-composer";
import { MessageList } from "./message-list";
import { PromptSuggestions } from "./prompt-suggestions";

export function ChatApp() {
  const {
    append,
    error,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    messages,
    stop,
  } = useChat({
    api: "/api/chat",
  });

  return (
    <main className="grid min-h-[100dvh] bg-stone-50 text-stone-950 lg:grid-cols-[320px_minmax(0,1fr)] dark:bg-zinc-950 dark:text-zinc-50">
      <aside className="border-b border-stone-200 bg-white px-5 py-5 lg:border-b-0 lg:border-r dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-3xl lg:sticky lg:top-5">
          <div className="flex items-center justify-between gap-4 lg:block">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500 dark:text-zinc-500">
                Dao De Jing for Founders
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950 dark:text-zinc-50">
                Founder Compass
              </h1>
            </div>
            <div className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-500 lg:mt-5 lg:inline-block dark:border-zinc-800 dark:text-zinc-400">
              Dao x AI
            </div>
          </div>

          <p className="mt-5 max-w-[36rem] text-sm leading-6 text-stone-600 lg:max-w-none dark:text-zinc-400">
            Use the Dao De Jing, Taoist philosophy, and AI startup practice to think through MVP, PMF, distribution, fundraising, competition, and founder pressure.
          </p>

          <div className="mt-6 hidden border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600 lg:block dark:border-zinc-800 dark:text-zinc-400">
            <p className="font-medium text-stone-900 dark:text-zinc-100">
              Answer standard
            </p>
            <p className="mt-2">
              Direct judgment first, then the structure underneath, then one to three concrete next actions. No mysticism, no startup slogans.
            </p>
          </div>
        </div>
      </aside>

      <section className="flex min-h-0 flex-col">
        <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 sm:px-6 lg:px-8">
          {messages.length === 0 ? (
            <div className="mx-auto flex min-h-[calc(100dvh-230px)] w-full max-w-3xl flex-col justify-center gap-8 py-8">
              <div>
                <p className="text-sm font-medium text-stone-500 dark:text-zinc-500">
                  Make the confusion specific. Start from the real problem.
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-stone-950 sm:text-5xl dark:text-zinc-50">
                  Use startup reality to find your way through the noise.
                </h2>
              </div>
              <PromptSuggestions
                disabled={isLoading}
                onSelect={(prompt) => {
                  void append({ content: prompt, role: "user" });
                }}
                prompts={starterPrompts}
              />
            </div>
          ) : (
            <MessageList isLoading={isLoading} messages={messages} />
          )}
        </div>

        {error ? (
          <div className="mx-auto w-full max-w-3xl px-4 pb-3 text-sm text-red-600 dark:text-red-400">
            {error.message}
          </div>
        ) : null}

        <div className="border-t border-stone-200 bg-stone-50/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950/95">
          <ChatComposer
            input={input}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            onStop={stop}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
}
