import { test, expect } from "@playwright/test";

test("ai chat api returns safe demo response", async ({ request }) => {
  const response = await request.post("/api/ai/chat", { data: { messages: [{ role: "user", content: "Help me choose a floor." }] } });
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.ok).toBe(true);
  expect(body.sent).toBeUndefined();
  expect(String(body.message || "")).toContain("demo");
});
