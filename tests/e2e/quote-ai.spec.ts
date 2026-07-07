import { test, expect } from "@playwright/test";

test("estimate page has ai readiness and consent", async ({ page }) => {
  await page.goto("/estimate");
  await expect(page.getByText("AI estimate-readiness", { exact: false })).toBeVisible();
  await expect(page.getByText("By submitting, you agree", { exact: false })).toBeVisible();
});
