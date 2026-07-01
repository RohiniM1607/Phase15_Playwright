import {test as base, expect} from '@playwright/test';

import { LoginPage } from '../pages/DemoBlaze/LoginPage';
import { DashBoardPage } from '../pages/DemoBlaze/DashBoardPage';

type Fixtures = {
    loginPage: LoginPage;
    dashboardPage: DashBoardPage;
};

export const test = base.extend<Fixtures>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async({page}, use) =>{
        await use(new DashBoardPage(page));
    }
});

export {expect};