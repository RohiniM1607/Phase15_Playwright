import{ chromium, firefox, webkit, Browser, Project} from 'playwright';

(async() => {
    const browser = await firefox.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({width: 1920, height: 1080});
    await page.goto('https://www.google.co.in');
    await page.waitForTimeout(5000);
    await browser.close();
})();