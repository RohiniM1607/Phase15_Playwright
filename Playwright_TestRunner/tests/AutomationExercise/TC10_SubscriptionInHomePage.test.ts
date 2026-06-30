import {test, expect} from '@playwright/test';

test('Subscription home page', async({page})=>{
    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });
    await page.goto("http://automationexercise.com");
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");

    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator(".single-widget h2")).toHaveText("Subscription");
    await page.locator("#susbscribe_email").fill("demo.1@gmail.com");
    await page.locator('#subscribe').click();
    console.log("Mail send");
    await expect(page.locator(".alert-success")).toContainText("You have been successfully subscribed!");
    console.log("Successfully subscribed in home page");

})