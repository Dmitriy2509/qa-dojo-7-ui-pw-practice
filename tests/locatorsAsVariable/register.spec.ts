import test, { expect } from "@playwright/test";
import { UserData } from "../../data/UserData";

test("Verify register", async ({page})=>{
    const usernameField = page.locator("[placeholder='Username']");
    const emailField = page.locator("[placeholder='Email']");
    const passwordField = page.locator("[placeholder='Password']");
    const submitButton = page.locator("[class*='btn-primary']");
    
    await page.goto("https://demo.learnwebdriverio.com/register");
    await usernameField.fill(UserData.generateUsername());
    await emailField.fill(UserData.generateEmail());
    await passwordField.fill(UserData.generatePassword());
    await submitButton.click();
});

test("Verify email password error message", async ({page})=>{
    const usernameField = page.locator("[placeholder='Username']");
    const submitButton = page.locator("[class*='btn-primary']");
    const errorMessage = page.locator(".error-messages");

    await page.goto("https://demo.learnwebdriverio.com/register");
    await usernameField.fill(UserData.generateUsername());
    await submitButton.click();
    await expect(errorMessage).toContainText("email can't be blank");
});

test("Verify username error message", async ({page})=>{
    const emailField = page.locator("[placeholder='Email']");
    const submitButton = page.locator("[class*='btn-primary']");
    const errorMessage = page.locator(".error-messages");

    await page.goto("https://demo.learnwebdriverio.com/register");
    await emailField.fill(UserData.generateEmail());
    await submitButton.click();
    await expect(errorMessage).toContainText("username can't be blank");
});