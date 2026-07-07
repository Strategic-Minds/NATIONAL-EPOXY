import { test, expect } from "@playwright/test";

test("hero image and color charts render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("homepage-hero-image")).toBeVisible();
  await expect(page.getByTestId("top-flake-chart")).toBeVisible();
  await expect(page.getByTestId("glitter-chart")).toBeVisible();
  await expect(page.getByTestId("metallic-chart")).toBeVisible();
  await expect(page.getByTestId("quartz-chart")).toBeVisible();
  await expect(page.getByRole("img", { name: "National Epoxy Pros metallic epoxy showroom floor" })).toBeVisible();
});
