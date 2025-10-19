import { test, expect } from '@playwright/test';

test('Verify coffee list', async ({ page }) => {
  const espresso = page.locator('[data-test="Espresso_Con Panna"]');
  const americano = page.locator('[data-test="Americano"]');
  const cappuccino = page.locator('[data-test="Cappuccino"]');
  const espressoMacchiato = page.locator('[data-test="Espresso_Macchiato"]');
  const flatWhite = page.locator('[data-test="Flat_White"]');
  const listItem = page.getByRole('listitem').filter({ hasText: 'cart (5)' });
  const pageItem = page.locator('#app');

  await page.goto('https://coffee-cart.app/');
  await espresso.click();
  await americano.click();
  await cappuccino.click();
  await espressoMacchiato.click();
  await flatWhite.click();
  await listItem.click();
  await expect(pageItem).toContainText('Americano');
  await expect(pageItem).toContainText('Cappuccino');
  await expect(pageItem).toContainText('Espresso Con Panna');
  await expect(pageItem).toContainText('Espresso Macchiato');
  await expect(pageItem).toContainText('Flat White');
});