import {Page, Locator} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly login: Locator;
    readonly loginTitle: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.login = page.getByRole('link', {name:"Log in"});
        this.loginTitle = page.getByRole('link', {name: "Log in"});
        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.loginButton = page.getByRole('button', {name: "Log in"});
    }

    async Navigate(url: string){
        await this.page.goto(url);
    }

    async clickLogin(){
        await this.login.click();
    }

    async enterCredentials(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }


}

