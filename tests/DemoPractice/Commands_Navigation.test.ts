import {test, expect } from '@playwright/test';
test('Login Test', async ({page}) => {
    await page.goto("https://google.co.in");
    await page.goto("https://www.flipkart.com");
    await page.goBack();
    await page.goForward;
    await page.reload();
})