import loginData from '../../test-data/OrangeHRM/LoginData.json';
import {test, expect} from '../../fixtures/OrangeHRMFixture';

test.describe("Logout Test",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);
    })
    test("logout",async({loginPage,dashboardPage})=>{
        await dashboardPage.logout();
        await expect(loginPage.loginButton).toBeVisible();
    })
})