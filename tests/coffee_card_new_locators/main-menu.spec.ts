import { test, expect } from "@playwright/test";

test("Verify text of the menu", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator('[aria-label="Menu page"]')).toBeVisible();
  await expect(page.locator('[aria-label="Menu page"]')).toContainText("menu");
  await expect(page.locator('[aria-label="Cart page"]')).toContainText("cart (0)");
  await expect(page.locator('[aria-label="GitHub page"]')).toContainText("github");
});
