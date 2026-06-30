import {test, expect} from '@playwright/test';

test('Verify Page', async({page}) =>{
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

    await page.locator("//a[text()=' Test Cases']").click();
    console.log("Test cases clicked");
    await expect(page).toHaveURL("https://automationexercise.com/test_cases");
    console.log("Test case page - Verified");
})