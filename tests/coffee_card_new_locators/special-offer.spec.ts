import { test, expect } from '@playwright/test';

test('Verify special order button', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[aria-label="Espresso Con Panna"]').click();
  await page.locator('[aria-label="Espresso Con Panna"]').click();
  await page.locator('[aria-label="Espresso Con Panna"]').click();
  await page.locator('.yes').click();
});