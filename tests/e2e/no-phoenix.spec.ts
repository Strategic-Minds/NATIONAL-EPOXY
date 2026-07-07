import { test, expect } from "@playwright/test";
test("no phoenix references appear", async ({ page }) => { await page.goto("/"); const text = await page.textContent("body"); expect(text?.toLowerCase()).not.toContain("phoenix"); });
