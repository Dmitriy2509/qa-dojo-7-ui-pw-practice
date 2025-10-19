import test, { expect } from "@playwright/test";

test("Click all checkboxes", async ({page})=>{
    await page.goto("https://demoqa.com/checkbox");
    await page.locator("//*[text()='Home']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]").click();
    await page.locator("//*[text()='Desktop']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]").click();
    await page.locator("//*[text()='Documents']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]").click();
    await page.locator("//*[text()='Downloads']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]").click();
    await page.locator("//*[text()='WorkSpace']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]").click();
    await page.locator("//*[text()='Office']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]").click();

    await page.locator("//*[text()='Notes']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='Commands']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();

    await page.locator("//*[text()='React']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='Angular']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='Veu']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    
    await page.locator("//*[text()='Public']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='Private']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='Classified']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='General']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    
    await page.locator("//*[text()='Word File.doc']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
    await page.locator("//*[text()='Excel File.doc']//parent::*//preceding-sibling::span[@class='rct-checkbox']").click();
   
    const countCheckboxes = await page.locator("//*[@class='rct-checkbox']").count();

    for(let i = 0; i < countCheckboxes; i++) {
        const isChecked = await page.locator("svg.rct-icon-check").nth(i).isVisible();
        expect(isChecked).toBeTruthy();
    }
});