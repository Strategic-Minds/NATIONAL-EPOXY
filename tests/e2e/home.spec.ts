import { test, expect } from "@playwright/test";

test("home hero and brand logo render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /durable floors\./i })).toBeVisible();
  await expect(page.getByText("NATIONWIDE.", { exact: false })).toBeVisible();
  await expect(page.getByRole("img", { name: /national epoxy pros/i }).first()).toBeVisible();
  await expect(page.getByText("GET A FAST, NO-OBLIGATION", { exact: false })).toBeVisible();
  await expect(page.getByText("100% Private & Secure", { exact: false })).toBeVisible();
});
