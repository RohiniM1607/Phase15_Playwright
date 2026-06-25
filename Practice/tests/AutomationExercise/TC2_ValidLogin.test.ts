import {test, expect } from '@playwright/test';

test('Valid Login', async({page}) =>{
    await page.goto("https://automationexercise.com/");
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.getByPlaceholder('Email Address').first().fill("sample.123@gmail.com");
    await page.getByPlaceholder('Password').fill("Sample@123");
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText(`Logged in as Sample`)).toBeVisible();
})
