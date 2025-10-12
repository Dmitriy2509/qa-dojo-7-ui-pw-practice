import test, { expect } from "@playwright/test";
import { UserData } from "../../data/UserData";

test("Verify register", async ({page})=>{
    await page.goto("https://demo.learnwebdriverio.com/register");
    await page.locator("[placeholder='Username']").fill(UserData.generateUsername());
    await page.locator("[placeholder='Email']").fill(UserData.generateEmail());
    await page.locator("[placeholder='Password']").fill(UserData.generatePassword());
    await page.locator("[class*='btn-primary']").click();
});

test("Verify email password error message", async ({page})=>{
    await page.goto("https://demo.learnwebdriverio.com/register");
    await page.locator("[placeholder='Username']").fill(UserData.generateUsername());
    await page.locator("[class*='btn-primary']").click();
    await expect(page.locator(".error-messages")).toContainText("email can't be blank");
});

test("Verify username error message", async ({page})=>{
    await page.goto("https://demo.learnwebdriverio.com/register");
    await page.locator("[placeholder='Email']").fill(UserData.generateEmail());
    await page.locator("[class*='btn-primary']").click();
    await expect(page.locator(".error-messages")).toContainText("username can't be blank");
});