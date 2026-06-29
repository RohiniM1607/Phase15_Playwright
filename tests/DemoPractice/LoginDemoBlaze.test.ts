import {chromium, test} from "@playwright/test"

test("Logi Test Demo", async() => {
    const browser = await chromium.launch({
        headless: true
    });
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto("https://www.demoblaze.com/");
    await page1.click("//a[@id='login2']")
    await page1.fill("//input[@id='loginusername']", "RohiniM");
    await page1.fill("//input[@id='loginpassword']", "Rohini_16");
    await page1.click("//button[text()='Log in']")
    await page1.waitForTimeout(5000);

    const page2 = await context.newPage();
    await page2.goto("https://www.demoblaze.com/cart.html");
})