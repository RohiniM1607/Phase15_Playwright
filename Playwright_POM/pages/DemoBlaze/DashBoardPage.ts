import {Page, Locator, expect} from '@playwright/test';

export class DashBoardPage{
    readonly page: Page;
    readonly welcomeUser: Locator;
    readonly logout:Locator;

    constructor(page: Page){
        this.page = page;
        this.welcomeUser = page.locator("#nameofuser");
        this.logout=page.getByRole("link",{name:"Log out"});
    }

    async verifyWelcomeUser(username: string) {
        await expect(this.welcomeUser).toHaveText(`Welcome ${username}`, { timeout: 30000 });
    }

    async Logout(){
        await this.logout.click();
    }
}