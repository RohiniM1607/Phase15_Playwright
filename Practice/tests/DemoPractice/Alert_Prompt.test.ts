import { test, expect } from '@playwright/test';

test('prompt alert', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");

    page.on("dialog", async (alert) => {
        console.log("Alert Type:", alert.type());
        console.log("Alert Message:", alert.message());
        await alert.accept("Rohini");
    });

    await page.locator("button:has-text('Click Me')").nth(2).click();
    await expect(page.locator("#prompt-demo")).toHaveText("You have entered 'Rohini' !");
});