import { test, expect } from '@playwright/test';

test('Verify special order button', async ({ page }) => {
  const espressConPana = page.locator('[data-test="Espresso_Con Panna"]');
  const submitSpecialOfferButton = page.getByRole('button', { name: 'Yes, of course!' });

  await page.goto('https://coffee-cart.app/');
  await espressConPana.click();
  await espressConPana.click();
  await espressConPana.click();
  await submitSpecialOfferButton.click();
});