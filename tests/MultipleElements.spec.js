    const { test, expect } = require("@playwright/test")

    test('Locators', async ({ page }) => {

        await page.goto('https://www.demoblaze.com');
        //click
        const linksOnThePage = await page.$$('a');
        for (const links of linksOnThePage) {
            const linkText = await links.textContent();
            console.log("Link Name is :" + linkText);
        }
        await page.close();

    })


    test('Product Product Names', async ({ page }) => {

        await page.goto('https://www.demoblaze.com');
        //click
        //page.waitForSelector('div#tbodyid h4>a');
        const productLinksOnThePagehePage = await page.$$('div#tbodyid h4>a')
        for (const Productinks of productLinksOnThePagehePage) {
            const ProductLinkText = await Productinks.textContent();
            console.log("Product Name is :" + ProductLinkText);
        }
        await page.close();

    })



