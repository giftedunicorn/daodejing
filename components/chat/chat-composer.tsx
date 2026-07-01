"use client";

import type { FormEvent } from "react";

import { Send, Square } from "lucide-react";

type ChatComposerProps = {
  input: string;
  isLoading: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onStop: () => void;
};

export function ChatComposer({
  input,
  isLoading,
  onInputChange,
  onSubmit,
  onStop,
}: ChatComposerProps) {
  const canSubmit = input.trim().length > 0 && !isLoading;

  return (
    <form
      className="mx-auto flex w-full max-w-3xl items-end gap-3 rounded-3xl border border-stone-200 bg-white p-3 shadow-lg shadow-stone-200/60 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20"
      onSubmit={onSubmit}
    >
      <label className="sr-only" htmlFor="message">
        输入创业问题
      </label>
      <textarea
        className="max-h-40 min-h-12 flex-1 resize-none bg-transparent px-2 py-3 text-sm leading-6 text-stone-950 outline-none placeholder:text-stone-400 dark:text-zinc-50 dark:placeholder:text-zinc-600"
        id="message"
        onChange={onInputChange}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
        }}
        placeholder="说出你的创业困惑..."
        rows={1}
        value={input}
      />
      {isLoading ? (
        <button
          aria-label="停止生成"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 text-stone-700 transition hover:bg-stone-100 active:scale-95 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
          onClick={onStop}
          type="button"
        >
          <Square aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
        </button>
      ) : (
        <button
          aria-label="发送"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-white transition hover:bg-stone-800 active:scale-95 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500"
          disabled={!canSubmit}
          type="submit"
        >
          <Send aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
        </button>
      )}
    </form>
  );
}
