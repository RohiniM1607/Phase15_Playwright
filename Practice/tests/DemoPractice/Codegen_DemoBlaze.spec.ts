import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('RohiniM');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Rohini_16');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome RohiniM');
  await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();

  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.locator('#login2')).toContainText('Log in');
});