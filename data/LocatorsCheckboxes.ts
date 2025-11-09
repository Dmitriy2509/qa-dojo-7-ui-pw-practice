import { Page } from "@playwright/test";

export class LocatorsCheckboxes {

    getLocators(page: Page) {
        const homeToggle = page.locator("//*[text()='Home']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]");
    const desktopToggle = page.locator("//*[text()='Desktop']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]");
    const documentsToggle = page.locator("//*[text()='Documents']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]");
    const downloadsToggle = page.locator("//*[text()='Downloads']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]");
    const workspaceToggle = page.locator("//*[text()='WorkSpace']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]");
    const officeToggle = page.locator("//*[text()='Office']//parent::*//preceding-sibling::button[//*[@aria-label='Toggle']]");
    const notesCheckbox = page.locator("//*[text()='Notes']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const commandsCheckbox = page.locator("//*[text()='Commands']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const reactCheckbox = page.locator("//*[text()='React']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const angularCheckbox = page.locator("//*[text()='Angular']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const veuCheckbox = page.locator("//*[text()='Veu']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const publicCheckbox = page.locator("//*[text()='Public']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const privateCheckbox = page.locator("//*[text()='Private']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const classifiedCheckbox = page.locator("//*[text()='Classified']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const generalCheckbox = page.locator("//*[text()='General']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const fileWordCheckbox = page.locator("//*[text()='Word File.doc']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const fileExcelCheckbox = page.locator("//*[text()='Excel File.doc']//parent::*//preceding-sibling::span[@class='rct-checkbox']");
    const checkBox = page.locator("//*[@class='rct-checkbox']");
    const markedCheckbox = page.locator("svg.rct-icon-check");
    
    return {homeToggle, desktopToggle, documentsToggle, downloadsToggle, workspaceToggle, officeToggle, notesCheckbox, commandsCheckbox, reactCheckbox, angularCheckbox, veuCheckbox, publicCheckbox, privateCheckbox, classifiedCheckbox, generalCheckbox, fileWordCheckbox, fileExcelCheckbox, checkBox, markedCheckbox}
    }
}