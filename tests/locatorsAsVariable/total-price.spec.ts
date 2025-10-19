import { test, expect } from "@playwright/test";

test("Verify total price", async ({ page }) => {
  const espresso = page.locator('[data-test="Espresso"]');
  const pageItem = page.locator('#app');
  const checkoutButton = page.locator('[data-test="checkout"]');
  
  await page.goto("https://coffee-cart.app/");
  await espresso.click();
  await expect(pageItem).toContainText("$10.00");
  await expect(checkoutButton).toContainText(
    "Total: $10.00"
  );
});
