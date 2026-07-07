import { test, expect } from "@playwright/test";
test("main CTA exists", async ({ page }) => { await page.goto("/"); await expect(page.getByText("Digital Bid Funnel")).toBeVisible(); });
