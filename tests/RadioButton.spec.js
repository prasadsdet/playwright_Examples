const{test, expect} = require('@playwright/test')

test('inputbox tests',async({page})=>{
    await page.goto('https://mdbootstrap.com/docs/standard/extended/registration/#section-4')
    await expect(page).toHaveURL('https://mdbootstrap.com/docs/standard/extended/registration/#section-4');

    await page.locator("//div[@class='card card-registration']//input[@id='femaleGender']").check();

    await expect(await page.locator("//div[@class='card card-registration']//input[@id='femaleGender']")).toBeChecked();
    await expect(await page.locator("//div[@class='card card-registration']//input[@id='femaleGender']").isChecked()).toBeTruthy();

    await expect(await page.locator("//div[@class='card card-registration']//input[@id='maleGender']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})