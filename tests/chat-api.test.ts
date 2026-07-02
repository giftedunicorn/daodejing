import { describe, expect, it, vi } from "vitest";

describe("/api/chat", () => {
  it("returns a clear error when DEEPSEEK_API_KEY is missing", async () => {
    vi.resetModules();
    vi.stubEnv("DEEPSEEK_API_KEY", "");

    const { POST } = await import("../app/api/chat/route");

    const response = await POST(
      new Request("http://localhost/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages: [] }),
      }),
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      error: "DEEPSEEK_API_KEY is not configured.",
    });
  });
});
