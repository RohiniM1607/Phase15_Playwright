import {test, expect } from '@playwright/test';

test('Logout User', async({page}) =>{
    await page.goto("https://automationexercise.com/", {
        waitUntil: "domcontentloaded"
    });
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.getByPlaceholder('Email Address').first().fill("sample.123@gmail.com");
    await page.getByPlaceholder('Password').fill("Sample@123");
    console.log("User Credentials Entered");
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Logged in as Sample')).toBeVisible();
    console.log("User logged in successfully");
    await page.getByRole('link', {name:' Logout'}).click();
    await expect(page).toHaveURL('https://automationexercise.com/login');
})
