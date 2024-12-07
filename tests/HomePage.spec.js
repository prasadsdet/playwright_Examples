const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    var pageTitle = await page.title
    console.log('Page Title is : ', pageTitle);
    await expect(page).toHaveTitle('STORE');
    
    var getURL = await page.url;
    console.log('Page Url is : ',getURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    await page.close();

})
/*
Step 1 - Create a new file under test folder
Step 2 - Add module ‘playwright/test’
    const { test, expect } = require('@playwright/test');
    
 ** test, expect  ------ functions from @playwright/test module
Playwright Test provides a test function to declare tests and expect function to write assertions

Step 3 - Create a test block - test(title, testFunction)
The keyword 'async' before a function makes the function return a promise
The keyword 'await' before a function makes the function wait for a promise

Step 4 - Run the test
npx playwright test --project=chromium --headed  FirstTest.spec.js
npx playwright test                                                     runs all tests on all browsers in headless mode
npx playwright test  MyTest1.spec.js                                    runs a specific test file
npx playwright test  MyTest1.spec.js  MyTest2.spec.js                   runs the files specified
npx playwright test -g "test title"                                     runs test with the title
npx playwright test --project=chromium                                  runs on specific browser
npx playwright test --headed                                            runs tests in headed mode
npx playwright test --debug                                             debug tests
npx playwright test example.spec.js --debug                             debug specific test file
*/