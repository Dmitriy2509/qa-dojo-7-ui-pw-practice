import { test, expect } from '@playwright/test';

test('Verify order payment', async ({ page }) => {
  const espresso = page.locator('[data-test="Espresso"]');
  const flatWhite = page.locator('[data-test="Flat_White"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const nameField = page.getByRole('textbox', { name: 'Name' });
  const emailFiled = page.getByRole('textbox', { name: 'Email' });
  const promotionCheckbox = page.getByRole('checkbox', { name: 'Promotion checkbox' });
  const submitButton = page.getByRole('button', { name: 'Submit' });

  await page.goto('https://coffee-cart.app/');
  await espresso.click();
  await flatWhite.click();
  await checkoutButton.click();
  await nameField.fill('TestName');
  await emailFiled.click();
  await emailFiled.fill('testemail@mail.com');
  await promotionCheckbox.check();
  await submitButton.click();
});