const { expect, test } = require('@playwright/test')


test('inputbox tests', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    // await page.locator("#country").selectOption({ label: 'India' });
    // await page.locator("#country").selectOption('Japan');
    // await page.locator("#country").selectOption({ value: 'usa' });
    // await page.locator("#country").selectOption({ index: 2 });
    // await page.selectOption("#country", 'Japan');


    // await page.waitForTimeout(5000);

    //Assertions
    // //1.Number of options in the dropdown
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    // //2.Number of options in the dropdown=Approach2
    // const options1 = await page.$$('#country option')
    // console.log("Number of options", options1.length)
    // await expect(options1.length).toBe(10);

    // //3.check the value presented or not
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy();
    /*
        //4.Looping options
        const options = await page.$$('#country option')
        let status = false;
        for (const option of options) {
            let value = await option.textContent();
            if (value.includes('France')) {
                status = true;
                break;
            }
        }
        expect(status).toBeTruthy();
        */

    //4.select options using Loop
    const options = await page.$$('#country option')
    for (const option of options) {
        let value = await option.textContent();
        if (value.includes('France')) {
            await page.selectOption("#country", value);
            break;
        }
    }
})