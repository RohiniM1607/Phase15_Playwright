import {test, expect } from '@playwright/test';

test('Login Test', async ({page}) => {
    await page.goto(process.env.BASE_URL!);
    await page.locator('a[title="My Account"]').click();
    await page.click('//a[text()="Login"]');
    await page.fill('#input-email',process.env.UNAME!);
    await page.fill('#input-password',process.env.PASSWORD!);
    await page.click('//input[@type="submit"]');
    await expect(page.locator('//h2[text()="My Account"]')).toHaveText("My Account");
});