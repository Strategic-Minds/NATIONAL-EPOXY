import { test, expect } from "@playwright/test";

test("home hero and brand logo render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /luxury epoxy floors/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /national epoxy pros/i }).first()).toBeVisible();
  await expect(page.getByText("quote-first digital bid funnel", { exact: false })).toBeVisible();
});
