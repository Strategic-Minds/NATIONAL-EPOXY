import { test, expect } from "@playwright/test";

for (const route of ["/", "/dashboard", "/admin", "/installer", "/floor-design-center"]) {
  test(`${route} loads`, async ({ page }) => { await page.goto(route); await expect(page).toHaveTitle(/National Epoxy Pros/); });
}
