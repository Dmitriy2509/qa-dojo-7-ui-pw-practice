import { test, expect } from "@playwright/test";

test("Verify total price", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[aria-label="Espresso"]').click();
  await expect(page.locator('[aria-label="Proceed to checkout"]')).toContainText("$10.00");
  await expect(page.locator('[aria-label="Proceed to checkout"]')).toContainText(
    "Total: $10.00"
  );
});
