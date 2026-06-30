import{test, expect} from '@playwright/test';

test('Invalid Register', async({page}) => {
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
    await page.goto("https://automationexercise.com/", {
        waitUntil: "domcontentloaded"
    });
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill('Demo');
    await page.getByPlaceholder('Email Address').nth(1).fill("demo1@gmail.com");
    await page.getByRole('button', {name: 'Signup'}).click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
})