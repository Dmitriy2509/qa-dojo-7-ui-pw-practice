import test, { expect } from "@playwright/test";
import { UserData } from "../../data/UserData";

test("Verify log in with valid date", async ({ page }) => {
  const email = UserData.generateEmail();
  const password = UserData.generatePassword();

  const usernameField = page.locator("[placeholder='Username']");
  const emailField = page.locator("[placeholder='Email']");
  const passwordField = page.locator("[placeholder='Password']");
  const submitButton = page.locator("[class*='btn-primary']");

  await page.goto("https://demo.learnwebdriverio.com/register");
  await usernameField.fill(UserData.generateUsername());
  await emailField.fill(email);
  await passwordField.fill(password);
  await submitButton.click();

  await emailField.fill(email);
  await passwordField.fill(password);
  await submitButton.click();
});

test("Verify email password error message", async ({ page }) => {
  const submitButton = page.locator("[class*='btn-primary']");
  const errorMessage = page.locator(".error-messages");
  const errorMessageText = "email can't be blank";

  await page.goto("https://demo.learnwebdriverio.com/login");
  await submitButton.click();
  await expect(errorMessage).toHaveText(errorMessageText);
});

test("Verify 'Need an account?' link is displayed", async ({ page }) => {
  const rowNeedAccount = page.locator(".row");
  const errorMessageText = "Need an account?";
  
  await page.goto("https://demo.learnwebdriverio.com/login");
  await expect(rowNeedAccount).toContainText(errorMessageText);
});
