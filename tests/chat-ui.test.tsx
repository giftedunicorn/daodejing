import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { ChatApp } from "../components/chat/chat-app";
import { PromptSuggestions } from "../components/chat/prompt-suggestions";
import { starterPrompts } from "../lib/chat/examples";

describe("ChatApp", () => {
  it("renders the founder advisor chat surface", () => {
    render(<ChatApp />);

    expect(
      screen.getByRole("heading", { name: "创业心法顾问" }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("说出你的创业困惑...")).toBeInTheDocument();
    expect(
      screen.getByText("我的 AI 产品一直没有 PMF，应该砍还是继续？"),
    ).toBeInTheDocument();
  });

  it("passes a starter prompt into the selected prompt handler", () => {
    const onSelect = vi.fn();

    render(
      <PromptSuggestions prompts={starterPrompts} onSelect={onSelect} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "PMF 卡住 我的 AI 产品一直没有 PMF，应该砍还是继续？",
      }),
    );

    expect(onSelect).toHaveBeenCalledWith(
      "我的 AI 产品一直没有 PMF，应该砍还是继续？",
    );
  });
});
