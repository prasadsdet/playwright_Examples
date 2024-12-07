const { expect, test } = require('@playwright/test')


test('inputbox tests', async ({ page }) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    await expect(page).toHaveURL('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
x
    await page.locator('button.multiselect').click();

    // const options = await page.locator('ul>li label input')
    // await expect(options).toHaveCount(11);

    // const options1 = await page.$$('ul>li label input')
    // console.log('Number of options are :'+options1.length)
    // await expect(options1.length).toBe(11);

    const options = await page.$$('ul>li label input')
    for(let option in options)
    {
        const optionvalue = await option.textContent();

        if(optionvalue.includes('Angular') || optionvalue.includes('Java'))
        {
            await option.click();
        }
    }

})