import { test, expect } from "@playwright/test";
test("assets manifest route is present", async ({ page }) => { await page.goto("/"); await expect(page.getByText("Preview Ready")).toBeVisible(); });
