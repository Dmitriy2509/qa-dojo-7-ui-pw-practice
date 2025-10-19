import { test, expect } from "@playwright/test";

test("Verify text of the menu", async ({ page }) => {
  const gitHubLink = page.getByText("menucart (0)github");
  const menuLink = page.getByRole("link", { name: "Menu page" });
  const menuPage = page.getByLabel("Menu page");
  const cartPage = page.getByLabel("Cart page");
  const gitHubPage = page.getByLabel("GitHub page");

  await page.goto("https://coffee-cart.app/");
  await expect(gitHubLink).toBeVisible();
  await expect(menuLink).toBeVisible();
  await expect(menuPage).toContainText("menu");
  await expect(cartPage).toContainText("cart (0)");
  await expect(gitHubPage).toContainText("github");
});
