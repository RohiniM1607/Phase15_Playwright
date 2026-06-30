import loginData from '../../test-data/OrangeHRM/LoginData.json';
import {test, expect} from '../../fixtures/BaseFixture';


test.describe('Dashboard Test', () =>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);
        
    })
    test.afterEach(async({dashboardPage})=>{
        await dashboardPage.logout();
    })
    test('Verify dashboard', async({dashboardPage})=>{
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard', {timeout:10000});
    })

    test('Verify quicklaunch', async({dashboardPage})=>{
        await expect(dashboardPage.quickLaunch).toHaveText('Quick Launch', {timeout: 10000});
    })

    test('Verify Timeatwork', async({dashboardPage})=>{
        await expect(dashboardPage.timeAtWork).toHaveText('Time at Work', {timeout: 10000});
    })
})