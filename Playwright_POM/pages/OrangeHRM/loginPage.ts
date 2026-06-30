import {Page, Locator} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly loginTitle: Locator;
    readonly errorMessage: Locator;
    

    constructor(page: Page){
        this.page= page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('button:has-text("Login")');
        this.loginTitle = page.locator('h5');
        this.errorMessage = page.locator('.oxd-alert-content-text');
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/',{
            waitUntil: 'domcontentloaded'
        }
    );
}

    async getLoginTitle(){
        return await this.loginTitle.textContent();
    }

    async login(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }

    
}