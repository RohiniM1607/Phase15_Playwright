# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlaze\LoginTest.test.ts >> Login Test >> Valid Login
- Location: tests\DemoBlaze\LoginTest.test.ts:8:9

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class LoginPage{
  4  |     readonly page: Page;
  5  |     readonly login: Locator;
  6  |     readonly loginTitle: Locator;
  7  |     readonly username: Locator;
  8  |     readonly password: Locator;
  9  |     readonly loginButton: Locator;
  10 | 
  11 |     constructor(page: Page){
  12 |         this.page = page;
  13 |         this.login = page.getByRole('link', {name:"Log in"});
  14 |         this.loginTitle = page.getByRole('link', {name: "Log in"});
  15 |         this.username = page.locator("#loginusername");
  16 |         this.password = page.locator("#loginpassword");
  17 |         this.loginButton = page.getByRole('button', {name: "Log in"});
  18 |     }
  19 | 
  20 |     async Navigate(url: string){
> 21 |         await this.page.goto(url);
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  22 |     }
  23 | 
  24 |     async clickLogin(){
  25 |         await this.login.click();
  26 |     }
  27 | 
  28 |     async enterCredentials(username: string, password: string){
  29 |         await this.username.fill(username);
  30 |         await this.password.fill(password);
  31 |     }
  32 | 
  33 |     async clickLoginButton(){
  34 |         await this.loginButton.click();
  35 |     }
  36 | 
  37 | 
  38 | }
  39 | 
  40 | 
```