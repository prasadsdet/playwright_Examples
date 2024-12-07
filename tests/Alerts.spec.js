const { test, expect } = require('@playwright/test')

test.skip('Assertions Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler

    page.on('dialog', async  dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click("//button[text()='Alert']")
    await page.waitForTimeout(3000);
})


test.skip('Confirmtion Dialog ', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Confirmtion window handler
    page.on('dialog', async  dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })

    await page.click("//button[text()='Confirm Box']")
    await page.waitForTimeout(3000);
    await expect (page.locator('#demo')).toHaveText('You pressed OK!');
})


test('Input Dialog ', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Confirmtion window handler
    page.on('dialog', async  dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Nunna Veera Prasad');
    })

    await page.click("//button[text()='Prompt']")
    await page.waitForTimeout(3000);
    await expect (page.locator('#demo')).toHaveText('Hello Nunna Veera Prasad! How are you today?');
})