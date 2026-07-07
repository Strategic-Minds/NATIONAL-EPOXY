import { test, expect } from "@playwright/test";

test("hero image and color charts render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("img", { name: /metallic showroom hero/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /top flake/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /glitter/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /metallic color chart/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /quartz/i }).first()).toBeVisible();
});
