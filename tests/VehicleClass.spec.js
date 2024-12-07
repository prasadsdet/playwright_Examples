const { test, expect } = require('@playwright/test')




test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('https://opsicloud.opsilive.com/');
});

test.describe('Landing Page validation', () => {
    landingPageLinkLocators.forEach((method, index) => {
        test(`Validate expected link text ${landingPageData.landingPageLinksText[index]} on the landing page by md zaman`, async ({ page }) => {
            const util = new utils(page);
            await util.verifyToHaveText(method, landingPageData.landingPageLinksText[index])

        });
    });


    test('my test', async ({ page }) => {
        expect(page.url()).toBe('https://opsicloud.opsilive.com/#/pub/login');
        console.log('Test Passed');
    });


    test.afterEach(async ({ page }, testInfo) => {
        console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

        if (testInfo.status !== testInfo.expectedStatus)
            console.log(`Failed to run and ended up at ${page.url()}`);
    });

//npx playright test --grep @smoke

//npx playwright test tests/LoginPO.spec.js --headed --project='chromium' --reporter=line,allure-playwrigh
//npx allure generate ./allure-results --clean
//npx allure open ./allure-report
//https://medium.com/geekculture/is-playwright-better-than-cypress-playwright-vs-cypress-151bd65a224f
//https://github.com/alapanme/Playwright-Automation/blob/master/tests/8-downloadFile.spec.ts
//https://github.com/rajatt95/Playwright_JS/blob/master/tests/Section_11_RS_UI_Tests_POM/50_NW_POM_Login_Dropdown_AutoSuggestive.spec.js
//https://github.com/gits5213/playwrightUIAutomationSutie/blob/main/tests/formAuth.spec.js