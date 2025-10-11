import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
});