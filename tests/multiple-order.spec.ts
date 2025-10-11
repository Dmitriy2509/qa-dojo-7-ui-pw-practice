import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await page.getByRole('button', { name: 'Add one Espresso Macchiato' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testName');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('testEmail@mail.com');
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
});