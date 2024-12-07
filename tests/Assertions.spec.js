const { test, expect } = require('@playwright/test')

//https://playwright.dev/docs/test-assertions
test('Assertions Test', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

//Soft Assertion
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(page.getByText('Company Details')).toBeVisible();
    const logoVisibility = await page.locator('.header-logo');
    await expect(logoVisibility).toBeVisible();
    const searchStore = await page.locator('#small-searchterms');
    await expect(searchStore).toBeEnabled();
    //Radio button
    const checkedmale = await page.locator('#gender-male')
    await checkedmale.click();
    await expect(checkedmale).toBeChecked();
    //Checkbox
    const chkbox = await page.locator('#Newsletter')
    await expect(chkbox).toBeChecked();

    //Attribute verify
    const checkAttributeForRegisterButton = await page.locator('#register-button')
    await expect(checkAttributeForRegisterButton).toHaveAttribute('type', "submit");

    //to Have text
    const RegisterText = await page.locator('.page-title h1')
    await expect(RegisterText).toHaveText("Register");

    //to Containes text
    const RegisterTextContains = await page.locator('.page-title h1')
    await expect(RegisterTextContains).toContainText("Regis");

    //toHave Value in the textbox
    const EmailtextBox = await page.locator('#Email');
    EmailtextBox.fill('Nunna@nunna.com')
    await expect(EmailtextBox).toHaveValue("Nunna@nunna.com");

    //count of Values

    const monthsCount = await page.locator("[name='DateOfBirthMonth'] option");
    await expect(monthsCount).toHaveCount(13);

    const DDoptions = await page.$$eval("[name='DateOfBirthMonth'] option", (els) => {
        return els.map(option => option.textContent)
    })
    console.log(DDoptions);
})