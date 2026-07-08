import { test, expect } from "@playwright/test";

test("home hero and brand logo render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /durable floors\. built to last\./i })).toBeVisible();
  await expect(page.getByText("NATIONWIDE.", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("img", { name: /national epoxy pros/i }).first()).toBeVisible();
  await expect(page.getByText("GET YOUR FREE DIGITAL BID.", { exact: false })).toBeVisible();
  await expect(page.getByText("START MY FREE DIGITAL BID", { exact: false })).toBeVisible();
});
