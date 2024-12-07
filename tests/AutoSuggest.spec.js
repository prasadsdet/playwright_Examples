const { expect, test } = require('@playwright/test')


test('inputbox tests', async ({ page }) => {
    await page.goto('https://www.codehim.com/demo/javascript-autocomplete-dropdown/');
    await page.locator('#fruit').fill('Bl');

    await page.locator("ul.has-suggestions li")

    const fromcityoptions = await page.$$("ul.has-suggestions li")
    for(let option in fromcityoptions)
    {
        const optionvalue = await option.textContent();
        console.log(optionvalue);


        await page.waitForTimeout(3000);
        if(optionvalue.includes('Blackberry')
        {
            await option.click();
            break;
        }
    }

})