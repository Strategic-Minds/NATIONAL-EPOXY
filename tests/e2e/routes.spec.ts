import { test, expect } from "@playwright/test";

for (const route of ["/", "/free-digital-bid", "/design-center", "/color-charts", "/floor-systems", "/floor-systems/metallic", "/floor-systems/garage-floors", "/floor-systems/polished-concrete", "/floor-systems/exterior-coatings", "/contact"]) {
  test(`${route} loads`, async ({ page }) => {
    await page.goto(route);
    await expect(page).toHaveTitle(/National Epoxy Pros/);
  });
}
