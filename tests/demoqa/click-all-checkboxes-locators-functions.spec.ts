import test, { expect } from "@playwright/test";
import { getLocators, goToDemoQa } from "../../data/LocatorsAsFunctions";

test(
  "TC-0001 Click all checkboxes (locators as function)",
  { tag: ["@smoke"] },
  async ({ page }) => {
    await goToDemoQa(page);
    const locators = await getLocators(page);
    await locators.homeToggle.waitFor();
    await locators.homeToggle.click();
    await locators.desktopToggle.waitFor();
    await locators.desktopToggle.click();
    await locators.documentsToggle.waitFor();
    await locators.documentsToggle.click();
    await locators.downloadsToggle.waitFor();
    await locators.downloadsToggle.click();
    await locators.workspaceToggle.waitFor();
    await locators.workspaceToggle.click();
    await locators.officeToggle.waitFor();
    await locators.officeToggle.click();
    await locators.notesCheckbox.waitFor();
    await locators.notesCheckbox.click();
    await locators.commandsCheckbox.waitFor();
    await locators.commandsCheckbox.click();
    await locators.reactCheckbox.waitFor();
    await locators.reactCheckbox.click();
    await locators.angularCheckbox.waitFor();
    await locators.angularCheckbox.click();
    await locators.veuCheckbox.waitFor();
    await locators.veuCheckbox.click();
    await locators.publicCheckbox.waitFor();
    await locators.publicCheckbox.click();
    await locators.privateCheckbox.waitFor();
    await locators.privateCheckbox.click();
    await locators.classifiedCheckbox.waitFor();
    await locators.classifiedCheckbox.click();
    await locators.generalCheckbox.waitFor();
    await locators.generalCheckbox.click();
    await locators.fileWordCheckbox.waitFor();
    await locators.fileWordCheckbox.click();
    await locators.fileExcelCheckbox.waitFor();
    await locators.fileExcelCheckbox.click();

    const countCheckboxes = await page
      .locator("//*[@class='rct-checkbox']")
      .count();

    for (let i = 0; i < countCheckboxes; i++) {
      const isChecked = await page
        .locator("svg.rct-icon-check")
        .nth(i)
        .isVisible();
      expect(isChecked).toBeTruthy();
    }
  }
);
