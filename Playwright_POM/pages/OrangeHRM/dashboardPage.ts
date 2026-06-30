import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly timeAtWork: Locator;
    readonly quickLaunch: Locator;
    readonly profile: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardTitle = page.locator('.oxd-topbar-header-title');
        this.timeAtWork = page.getByText('Time at Work');
        this.quickLaunch = page.getByText('Quick Launch');
        this.profile = page.locator(".oxd-userdropdown-name");
        this.logoutButton = page.getByText('Logout');
    }

    async getDashboardTitle() {
        return await this.dashboardTitle.textContent();
    }
    async logout(){
        await this.profile.click({timeout: 10000});
        await this.logoutButton.click();
    }
}