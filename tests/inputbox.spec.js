const{test, expect} = require('@playwright/test')

test('inputbox tests',async({page})=>{
    await page.goto('https://mdbootstrap.com/docs/standard/extended/registration/#section-4')
    await expect(page).toHaveURL('https://mdbootstrap.com/docs/standard/extended/registration/#section-4');

    await expect( page.locator('#form3Example1m')).toBeVisible();
    await expect( page.locator('#form3Example1m')).toBeEmpty();
    await expect( page.locator('#form3Example1m')).toBeEditable();
    await expect( page.locator('#form3Example1m')).toBeEnabled();

    await page.locator('#form3Example1m').fill('VeeraPrasad');

    await expect( page.locator('#form3Example1n')).toBeVisible();
    await expect( page.locator('#form3Example1n')).toBeEmpty();
    await expect( page.locator('#form3Example1n')).toBeEditable();
    await expect( page.locator('#form3Example1n')).toBeEnabled();

    await page.fill("#form3Example1n","Nunna")

    await page.waitForTimeout(5000);

})