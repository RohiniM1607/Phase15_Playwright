import{test, expect} from '@playwright/test';

test('Google Search', async({page}) => {
    await page.goto("https://automationexercise.com/", {
        waitUntil: "domcontentloaded"
    });
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill('Demo');
    const email = `demo${Date.now()}${Math.floor(Math.random() * 1000)}@gmail.com`;
    await page.getByPlaceholder('Email Address').nth(1).fill(email);
    await page.getByRole('button', {name: 'Signup'}).click();
    console.log("Sign-in performed");

    await expect(page.getByText('Enter Account Information')).toBeVisible();
    console.log("Enter Account Information - Verified");
    await page.locator('#id_gender2').check();
    await page.locator('#password').fill("Demo@123");
    await page.locator('#days').selectOption('13');
    await page.locator('#months').selectOption('June');
    await page.locator('#years').selectOption('2007');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();
    console.log("Account Information Entered");

    await page.locator('#first_name').fill("Demo");
    await page.locator('#last_name').fill("Demo");
    await page.locator('#company').fill("SmartCliff");
    await page.locator('#address1').fill("Clock Tower");
    await page.locator('#address2').fill("R.S Puram");
    await page.locator('#country').selectOption('India');
    await page.locator('#state').fill("Tamil Nadu");
    await page.locator('#city').fill("Coimbatore");
    await page.locator('#zipcode').fill("641002");
    await page.locator('#mobile_number').fill("9876543210");
    console.log("Address Information Entered");
    await page.getByRole('button', {name: 'Create Account'}).click();
    console.log("Account Created");

    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByRole('link', {name: 'Continue'}).click();
    await expect(page.getByText(`Logged in as Demo`)).toBeVisible();
    await page.getByRole('link', {name:  'Delete Account'}).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.getByRole('link', {name: 'Continue'}).click();
    console.log("Account Deleted");
})