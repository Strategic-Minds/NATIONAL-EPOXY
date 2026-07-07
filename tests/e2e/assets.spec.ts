import { test, expect } from "@playwright/test";
test("assets and missing assets are reported", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.getByText("Preview Ready")).toBeVisible();
  const res = await request.get("/api/cron/validate");
  const json = await res.json();
  expect(Array.isArray(json.payload.assetWarnings)).toBe(true);
});
