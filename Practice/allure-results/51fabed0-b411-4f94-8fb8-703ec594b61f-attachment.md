# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlaze.test.ts >> Login Test
- Location: tests\DemoBlaze.test.ts:2:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1 | import {test, expect } from '@playwright/test';
  2 | test('Login Test', async ({page}) => {
> 3 |     await page.goto(process.env.BASE_URL!);
    |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.demoblaze.com/
  4 |     await page.click('#login2');
  5 |     await page.fill('#loginusername',process.env.UNAME!);
  6 |     await page.fill('#loginpassword',process.env.PASSWORD!);
  7 |     await page.click('//button[@onclick="logIn()"]');
  8 |     await expect(page.locator('//a[text()="Welcome admin"]')).toHaveText("Welcome admin");
  9 | });
```