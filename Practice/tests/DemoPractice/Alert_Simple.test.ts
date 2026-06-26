import { test, expect } from '@playwright/test';

test('simple alert', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");

    page.on("dialog", async (alert) => {
        console.log("Alert Type:", alert.type());
        console.log("Alert Message:", alert.message());
        await alert.accept();
    });

    await page.locator("button:has-text('Click Me')").first().click();
});