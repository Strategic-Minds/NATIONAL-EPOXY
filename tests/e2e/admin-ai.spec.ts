import { test, expect } from "@playwright/test";

test("admin page exposes ai command center", async ({ page }) => {
  await page.goto("/admin");
  await expect(page.getByText("AI Command Center", { exact: false })).toBeVisible();
  await expect(page.getByText("WhatsApp Automation: Dry Run Ready", { exact: false })).toBeVisible();
});
