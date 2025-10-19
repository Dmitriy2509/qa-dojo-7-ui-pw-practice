import { test, expect } from '@playwright/test';

test('Verify order submit', async ({ page }) => {
  const espressoMacchiato = page.locator('[data-test="Espresso_Macchiato"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const addOneMoreItem = page.getByRole('button', { name: 'Add one Espresso Macchiato' });
  const nameField = page.getByRole('textbox', { name: 'Name' });
  const emailField = page.getByRole('textbox', { name: 'Email' });
  const promotionCheckbox = page.getByRole('checkbox', { name: 'Promotion checkbox' });
  const submitButton = page.getByRole('button', { name: 'Submit' });
  const pageItem = page.locator('#app');

  await page.goto('https://coffee-cart.app/');
  await espressoMacchiato.click();
  await checkoutButton.hover();
  await addOneMoreItem.click();
  await checkoutButton.click();
  await nameField.fill('testName');
  await nameField.press('Tab');
  await emailField.fill('testEmail@mail.com');
  await promotionCheckbox.check();
  await submitButton.click();
  await expect(pageItem).toContainText('Thanks for your purchase. Please check your email for payment.');
});