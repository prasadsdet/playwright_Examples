const { expect, test } = require('@playwright/test')


test('inputbox tests', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    //Select Multiple option in the dropdown
    // await page.selectOption('#colors', ['Blue','Red', 'Yelllow'])
    // await page.waitForTimeout(5000);
    //Assertions

    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(5);

    const options1 = await page.$$('#colors option')
    console.log('Number of options are :'+options1.length)
    await expect(options1.length).toBe(5);

    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();//Black should not be there
})