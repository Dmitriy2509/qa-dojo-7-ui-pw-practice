import { test, expect } from '@playwright/test';

test('Verify special order', async ({ page }) => {
  const espressMacchiato = page.locator('[data-test="Espresso_Macchiato"]');
  const pageItem = page.locator('#app');
  const submitSpecialOfferButton = page.getByRole('button', { name: 'Yes, of course!' });

  await page.goto('https://coffee-cart.app/');
  await espressMacchiato.click();
  await espressMacchiato.click();
  await espressMacchiato.click();
  await expect(pageItem).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
  await submitSpecialOfferButton.click();
});