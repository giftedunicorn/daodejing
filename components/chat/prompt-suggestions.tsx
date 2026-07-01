"use client";

import { ArrowUpRight } from "lucide-react";

import type { StarterPrompt } from "@/lib/chat/examples";

type PromptSuggestionsProps = {
  prompts: StarterPrompt[];
  onSelect: (prompt: string) => void;
  disabled?: boolean;
};

export function PromptSuggestions({
  prompts,
  onSelect,
  disabled = false,
}: PromptSuggestionsProps) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {prompts.map((item) => (
        <button
          className="group flex min-h-24 flex-col justify-between rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          disabled={disabled}
          key={item.title}
          onClick={() => onSelect(item.prompt)}
          type="button"
        >
          <span className="text-sm font-semibold text-stone-950 dark:text-zinc-50">
            {item.title}
          </span>
          <span className="mt-3 flex items-end justify-between gap-3 text-sm leading-6 text-stone-600 dark:text-zinc-400">
            <span>{item.prompt}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-stone-400 transition group-hover:text-stone-800 dark:text-zinc-600 dark:group-hover:text-zinc-200"
              strokeWidth={1.8}
            />
          </span>
        </button>
      ))}
    </div>
  );
}
