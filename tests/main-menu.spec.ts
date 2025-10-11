import { test, expect } from "@playwright/test";

test("Verify text of the menu", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.getByText("menucart (0)github")).toBeVisible();
  await expect(page.getByRole("link", { name: "Menu page" })).toBeVisible();
  await expect(page.getByLabel("Menu page")).toContainText("menu");
  await expect(page.getByLabel("Cart page")).toContainText("cart (0)");
  await expect(page.getByLabel("GitHub page")).toContainText("github");
});
