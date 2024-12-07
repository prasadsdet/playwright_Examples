const { expect, test } = require('@playwright/test')


test('inputbox tests', async ({ page }) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')
    await expect(page).toHaveURL('https://itera-qa.azurewebsites.net/home/automation');

    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    //await page.check("//div[@id='card card-registration' and @type='checkbox']");

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();


    //Select Multiple

    const checkboxLocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ];

    for (const checkbox of checkboxLocators) {
        await page.locator(checkbox).check();
    }
    await page.waitForTimeout(5000);
    for (const checkbox of checkboxLocators) {
        if (await page.locator(checkbox).isChecked()) {
            await page.locator(checkbox).uncheck();
        }
    }



    await page.waitForTimeout(5000);

})