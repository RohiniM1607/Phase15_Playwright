import {test, expect } from '@playwright/test';
test('Browser commands', async ({page}) => {
    await page.goto("https://www.demoblaze.com/");
    console.log(""+await page.title());
    console.log(await page.url());
    console.log((await page.content()).substring(0, 30));
    console.log("Page closing", await page.close());
    //console.log("Browser closing", await browser.cloase());
})

test('Navigation commands', async ({page}) => {
    await page.goto("https://google.co.in");
    await page.goto("https://www.flipkart.com");
    await page.goBack();
    await page.goForward;
    await page.reload();
})