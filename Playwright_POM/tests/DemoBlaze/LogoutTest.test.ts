import {test,expect} from '../../fixtures/DemoBlazeFixture'
import loginData from '../../test-data/DemoBlaze/LoginData.json'
test.describe('Login Test',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.Navigate(process.env.BASE_URL!);
        await loginPage.clickLogin();
        await loginPage.enterCredentials(loginData.validUser.username,loginData.validUser.password);
        await loginPage.clickLoginButton();
    })
    test("logout",async({loginPage,dashboardPage})=>{
        await dashboardPage.Logout();
        await expect(loginPage.login).toBeVisible({timeout: 10000});
    })
})