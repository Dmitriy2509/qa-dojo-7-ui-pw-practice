import { test, expect } from '@playwright/test';

test('Verify special order', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[aria-label="Espresso Macchiato"]').click();
  await page.locator('[aria-label="Espresso Macchiato"]').click();
  await page.locator('[aria-label="Espresso Macchiato"]').click();
  await expect(page.locator('#app')).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
  await page.locator('.yes').click();
});