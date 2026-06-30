import loginData from '../test-data/LoginData.json';
import {test, expect} from '../../fixtures/BaseFixture';

test.beforeEach(async({loginPage})=>{
    loginPage.navigate();
    loginPage.login(loginData.validUser.username, loginData.invalidUser.password);
    console.log("Logged in");
})

test('Logout test', async({loginPage, dashboardPage})=>{
    await dashboardPage.logout();
    await expect(loginPage.loginTitle).toBeVisible({timeout: 10000});
})