import {Page, Locator, expect} from '@playwright/test';

export class DashBoardPage{
    readonly page: Page;
    readonly welcomeUser: Locator;

    constructor(page: Page){
        this.page = page;
        this.welcomeUser = page.locator("#nameofuser");
    }

    async verifyWelcomeUser(username: string) {
        await expect(this.welcomeUser).toHaveText(`Welcome ${username}`);
    }
}