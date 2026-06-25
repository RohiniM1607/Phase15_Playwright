# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TutorialsNinja.test.ts >> Login Test
- Location: tests\TutorialsNinja.test.ts:3:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test';
  2  | 
  3  | test('Login Test', async ({page}) => {
> 4  |     await page.goto(process.env.BASE_URL!);
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.demoblaze.com/
  5  |     await page.locator('a[title="My Account"]').click();
  6  |     await page.click('//a[text()="Login"]');
  7  |     await page.fill('#input-email',process.env.UNAME!);
  8  |     await page.fill('#input-password',process.env.PASSWORD!);
  9  |     await page.click('//input[@type="submit"]');
  10 |     await expect(page.locator('//h2[text()="My Account"]')).toHaveText("My Account");
  11 | });
```