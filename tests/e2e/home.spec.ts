import { test, expect } from "@playwright/test";

test("home hero and brand logo render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /durable floors\. built to last\. nationwide\./i })).toBeVisible();
  await expect(page.getByRole("img", { name: /national epoxy pros/i }).first()).toBeVisible();
  await expect(page.getByText("quote-first funnel", { exact: false })).toBeVisible();
});
