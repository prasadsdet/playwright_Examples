const { test, expect } = require("@playwright/test")

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    //click
    await page.locator('id=login2').click();
    //await page.click('id=login2');

    //textbox
    //await page.locator('#loginusername').fill('pavanol');
    // await page.fill('#loginusername',"pavanol");
    await page.fill('#loginusername', 'pavanol');
    await page.fill("input[id='loginpassword']", "test@123");
    await page.click('#logInModal button.btn.btn-primary');

    const logoutLink = await page.locator('#logout2');
    await expect(logoutLink).toBeVisible();

    await page.close();

})
