import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.getByRole('listitem').filter({ hasText: 'cart (5)' }).click();
  await expect(page.locator('#app')).toContainText('Americano');
  await expect(page.locator('#app')).toContainText('Cappuccino');
  await expect(page.locator('#app')).toContainText('Espresso Con Panna');
  await expect(page.locator('#app')).toContainText('Espresso Macchiato');
  await expect(page.locator('#app')).toContainText('Flat White');
});