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
      screen.getByRole("heading", { name: "Founder Compass" }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ask a real founder problem...")).toBeInTheDocument();
    expect(
      screen.getByText(
        "My AI product still does not have PMF. Should I keep going, pivot, or kill it?",
      ),
    ).toBeInTheDocument();
  });

  it("passes a starter prompt into the selected prompt handler", () => {
    const onSelect = vi.fn();

    render(
      <PromptSuggestions prompts={starterPrompts} onSelect={onSelect} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "PMF Stuck My AI product still does not have PMF. Should I keep going, pivot, or kill it?",
      }),
    );

    expect(onSelect).toHaveBeenCalledWith(
      "My AI product still does not have PMF. Should I keep going, pivot, or kill it?",
    );
  });
});
