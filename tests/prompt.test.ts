import { describe, expect, it } from "vitest";

import { starterPrompts } from "../lib/chat/examples";
import { startupXinfaSystemPrompt } from "../lib/prompts/startup-xinfa";

describe("startup xinfa prompt", () => {
  it("covers Daoist startup mentoring requirements", () => {
    expect(startupXinfaSystemPrompt).toContain("《道德经》");
    expect(startupXinfaSystemPrompt).toContain("AI 创业");
    expect(startupXinfaSystemPrompt).toContain("MVP");
    expect(startupXinfaSystemPrompt).toContain("PMF");
    expect(startupXinfaSystemPrompt).toContain("流量");
    expect(startupXinfaSystemPrompt).toContain("不要");
  });

  it("provides practical starter prompts", () => {
    expect(starterPrompts).toHaveLength(4);
    expect(starterPrompts[0]?.prompt).toContain("PMF");
  });
});
