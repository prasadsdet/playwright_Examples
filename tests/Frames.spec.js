
const { test, expect } = require('@playwright/test')

test('Frames Test ', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes = await page.frames();
    console.log("Number of frames :" + allframes.length);
    //const frame1 = await page.frame('aswift_0')
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    // await frame1.fill("[name='mytext1']", 'hello');

    const inputFour = await page.frameLocator("//frame[src='frame_4.html']").locator("[name='mytext4']")
    inputFour.fill("Nunna");

    await page.waitForTimeout(5000);
})
