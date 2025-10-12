import { test, expect } from '@playwright/test';

test('Verify coffee list', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[aria-label="Espresso Con Panna"]').click();
  await page.locator('[aria-label="Americano"]').click();
  await page.locator('[aria-label="Cappuccino"]').click();
  await page.locator('[aria-label="Espresso Macchiato"]').click();
  await page.locator('[aria-label="Flat White"]').click();
  await page.locator('[aria-label="Cart page"]').click();
  await expect(page.locator('.list')).toContainText('Americano');
  await expect(page.locator('.list')).toContainText('Cappuccino');
  await expect(page.locator('.list')).toContainText('Espresso Con Panna');
  await expect(page.locator('.list')).toContainText('Espresso Macchiato');
  await expect(page.locator('.list')).toContainText('Flat White');
});