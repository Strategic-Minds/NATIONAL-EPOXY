import { test, expect } from "@playwright/test";
test("mobile installer view renders", async ({ page }) => { await page.goto("/installer"); await expect(page.getByText("Installer PWA")).toBeVisible(); });
