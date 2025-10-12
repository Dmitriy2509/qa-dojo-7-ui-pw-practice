import { test, expect } from "@playwright/test";

test("Verify total price", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await expect(page.locator("#app")).toContainText("$10.00");
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $10.00"
  );
});
