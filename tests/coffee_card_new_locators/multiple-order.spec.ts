import { test, expect } from '@playwright/test';

test('Verify order submit', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[aria-label="Espresso Macchiato"]').click();
  await page.locator('[aria-label="Proceed to checkout"]').hover();
  await page.locator('[aria-label="Add one Espresso Macchiato"]').click();
  await page.locator('[aria-label="Proceed to checkout"]').click();
  await page.locator('#name').fill('testName');
  await page.locator('#name').press('Tab');
  await page.locator('#email').fill('testEmail@mail.com');
  await page.locator('#promotion').check();
  await page.locator('#submit-payment').click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
});