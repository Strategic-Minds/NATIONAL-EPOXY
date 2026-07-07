import { test, expect } from "@playwright/test";
test("cron endpoint returns ok", async ({ request }) => {
  const res = await request.get("/api/cron/validate");
  const json = await res.json();
  expect(json.payload.ok).toBe(true);
});
