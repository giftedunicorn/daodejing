"use client";

import type { Message } from "ai";

type MessageListProps = {
  messages: Message[];
  isLoading: boolean;
};

export function MessageList({ messages, isLoading }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-1 flex-col justify-center py-10">
        <p className="text-sm font-medium text-stone-500 dark:text-zinc-500">
          Start with a specific problem. The sharper the situation, the easier it is to see whether the issue is product, distribution, PMF, fundraising narrative, or founder state.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-5 py-8">
      {messages.map((message) => (
        <article
          className={
            message.role === "user"
              ? "ml-auto max-w-[88%] rounded-3xl bg-stone-950 px-5 py-3 text-sm leading-7 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-950"
              : "mr-auto max-w-[92%] rounded-3xl border border-stone-200 bg-white px-5 py-4 text-sm leading-7 text-stone-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
          }
          key={message.id}
        >
          <div className="whitespace-pre-wrap">{message.content}</div>
        </article>
      ))}
      {isLoading ? (
        <div className="mr-auto flex max-w-[92%] items-center gap-2 rounded-3xl border border-stone-200 bg-white px-5 py-4 text-sm text-stone-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-stone-500 dark:bg-zinc-400" />
          Reading the structure of the problem...
        </div>
      ) : null}
    </div>
  );
}
