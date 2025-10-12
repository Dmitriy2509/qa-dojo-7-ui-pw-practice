import test, { expect } from "@playwright/test";
import { UserData } from "../../data/UserData";

test("Verify log in with valid date", async ({ page }) => {
  const email = UserData.generateEmail();
  const password = UserData.generatePassword();
  await page.goto("https://demo.learnwebdriverio.com/register");
  await page
    .locator("[placeholder='Username']")
    .fill(UserData.generateUsername());
  await page.locator("[placeholder='Email']").fill(email);
  await page.locator("[placeholder='Password']").fill(password);
  await page.locator("[class*='btn-primary']").click();

  await page.locator("[placeholder='Email']").fill(email);
  await page.locator("[placeholder='Password']").fill(password);
  await page.locator("[class*='btn-primary']").click();
});

test("Verify email password error message", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/login");
  await page.locator("[class*='btn-primary']").click();
  await expect(page.locator(".error-messages")).toHaveText(
    "email can't be blank"
  );
});

test("Verify 'Need an account?' link is displayed", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/login");
  await expect(page.locator(".row")).toContainText("Need an account?");
});
