import { test, expect } from '@playwright/test';

test('Invalid Login', async({page}) =>{
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
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.getByPlaceholder('Email Address').first().fill("sample123@gmail.com");
    await page.getByPlaceholder('Password').fill("Sample123");
    console.log("User credentials Entered")
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
    console.log("Your email or password is incorrect!");
})
