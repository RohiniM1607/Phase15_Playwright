import {test as base, expect} from '@playwright/test';

import { LoginPage } from '../pages/OrangeHRM/loginPage';
import { DashboardPage} from '../pages/OrangeHRM/dashboardPage';

type Fixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async({page}, use) => {
        await use(new DashboardPage(page));
    }
});

export { expect };