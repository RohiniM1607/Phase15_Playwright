# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\TC1_RegisterUser.test.ts >> Valid Register
- Location: tests\AutomationExercise\TC1_RegisterUser.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Enter Account Information')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Enter Account Information')

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test';
  2  | 
  3  | test('Valid Register', async({page}) => {
  4  |     await page.goto("https://automationexercise.com/", {
  5  |         waitUntil: "domcontentloaded"
  6  |     });
  7  |     await expect(page.locator('.carousel-inner').first()).toBeVisible();
  8  |     console.log("Home page - Verified");
  9  |     await page.getByRole('link', {name: 'Signup / Login'}).click();
  10 |     await expect(page.getByText('New User Signup!')).toBeVisible();
  11 |     await page.getByPlaceholder('Name').fill('Demo');
  12 |     const email = `demo${Date.now()}${Math.floor(Math.random() * 1000)}@gmail.com`;
  13 |     await page.getByPlaceholder('Email Address').nth(1).fill(email);
  14 |     await page.getByRole('button', {name: 'Signup'}).click();
  15 |     console.log("Sign-in performed");
  16 | 
> 17 |     await expect(page.getByText('Enter Account Information')).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  18 |     console.log("Enter Account Information - Verified");
  19 |     await page.locator('#id_gender2').check();
  20 |     await page.locator('#password').fill("Demo@123");
  21 |     await page.locator('#days').selectOption('13');
  22 |     await page.locator('#months').selectOption('June');
  23 |     await page.locator('#years').selectOption('2007');
  24 |     await page.locator('#newsletter').check();
  25 |     await page.locator('#optin').check();
  26 |     console.log("Account Information Entered");
  27 | 
  28 |     await page.locator('#first_name').fill("Demo");
  29 |     await page.locator('#last_name').fill("Demo");
  30 |     await page.locator('#company').fill("SmartCliff");
  31 |     await page.locator('#address1').fill("Clock Tower");
  32 |     await page.locator('#address2').fill("R.S Puram");
  33 |     await page.locator('#country').selectOption('India');
  34 |     await page.locator('#state').fill("Tamil Nadu");
  35 |     await page.locator('#city').fill("Coimbatore");
  36 |     await page.locator('#zipcode').fill("641002");
  37 |     await page.locator('#mobile_number').fill("9876543210");
  38 |     console.log("Address Information Entered");
  39 |     await page.getByRole('button', {name: 'Create Account'}).click();
  40 |     console.log("Account Created");
  41 | 
  42 |     await expect(page.getByText('Account Created!')).toBeVisible();
  43 |     await page.getByRole('link', {name: 'Continue'}).click();
  44 |     await expect(page.getByText(`Logged in as Demo`)).toBeVisible();
  45 |     await page.getByRole('link', {name:  'Delete Account'}).click();
  46 |     await expect(page.getByText('Account Deleted!')).toBeVisible();
  47 |     await page.getByRole('link', {name: 'Continue'}).click();
  48 |     console.log("Account Deleted");
  49 | })
```