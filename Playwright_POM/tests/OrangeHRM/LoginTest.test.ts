import {test, expect } from '../../fixtures/BaseFixture';
import loginData from '../../test-data/OrangeHRM/LoginData.json';

test.describe("Login Test", ()=>{
    test.beforeEach(async ({loginPage})=>{
        await loginPage.navigate();
    })


    test('Valid Login @login', async({loginPage, dashboardPage})=>{
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    })

    test('Invalid Login', {tag: "@login"}, async({loginPage})=>{
        await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);
        await expect(loginPage.errorMessage).toHaveText('Invalid credentials', {timeout: 10000});
    })
})