import { describe, expect, it } from "vitest";

import { starterPrompts } from "../lib/chat/examples";
import { founderCompassSystemPrompt } from "../lib/prompts/founder-compass";

describe("founder compass prompt", () => {
  it("covers Daoist startup mentoring requirements", () => {
    expect(founderCompassSystemPrompt).toContain("Dao De Jing");
    expect(founderCompassSystemPrompt).toContain("AI startup");
    expect(founderCompassSystemPrompt).toContain("MVP");
    expect(founderCompassSystemPrompt).toContain("PMF");
    expect(founderCompassSystemPrompt).toContain("traffic");
    expect(founderCompassSystemPrompt).toContain("Avoid");
  });

  it("provides practical starter prompts", () => {
    expect(starterPrompts).toHaveLength(4);
    expect(starterPrompts[0]?.prompt).toContain("PMF");
  });
});
