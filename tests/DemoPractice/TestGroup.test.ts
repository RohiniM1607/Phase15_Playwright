import { test, expect } from '@playwright/test';

test.describe.skip('Home Page', () => {

    test('Verify Home Page Title @smoke', async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
        await expect(page).toHaveTitle('STORE');
    });

    test('Verify Logo', async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
        await expect(page.locator('#nava')).toBeVisible();
    });

});

test.describe('Login Module @describe', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
    });

    test('Valid Login & @smoke', async ({ page }) => {
        await page.click('#login2');
        await page.fill('#loginusername', 'RohiniM');
        await page.fill('#loginpassword', 'Rohini_16');
        await page.click('button[onclick="logIn()"]');
        await expect(page.locator('#nameofuser')).toHaveText('Welcome RohiniM');
    });

    test('Logout @regression', async ({ page }) => {
        await page.click('#login2');
        await page.fill('#loginusername', 'RohiniM');
        await page.fill('#loginpassword', 'Rohini_16');
        await page.click('button[onclick="logIn()"]');
        await page.getByRole('link', { name: 'Log out' }).click();
        await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    });

});