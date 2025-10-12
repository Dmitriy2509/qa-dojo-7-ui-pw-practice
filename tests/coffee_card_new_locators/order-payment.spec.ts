import { test, expect } from '@playwright/test';

test('Verify order payment', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Flat White"]').click();
  await page.locator('[aria-label="Proceed to checkout"]').click();
  await page.locator('#name').fill('TestName');
  await page.locator('#email').click();
  await page.locator('#email').fill('testemail@mail.com');
  await page.locator('#promotion').check();
  await page.locator('#submit-payment').click();
});