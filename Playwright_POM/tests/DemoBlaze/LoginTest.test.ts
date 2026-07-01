import {test, expect} from '../../fixtures/DemoBlazeFixture';
import loginData from '../../test-data/DemoBlaze/LoginData.json';

test.describe('Login Test', ()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.Navigate(process.env.BASE_URL!);
    });
    test('Valid Login', async({loginPage, dashboardPage})=>{
        await loginPage.clickLogin();
        await expect(loginPage.username).toBeVisible();
        await loginPage.enterCredentials(loginData.validUser.username,loginData.validUser.password);
        await loginPage.clickLoginButton();
        await dashboardPage.verifyWelcomeUser(loginData.validUser.username);
    });

    test('Invalid Login', async({loginPage})=>{
        await loginPage.clickLogin();
        await expect(loginPage.username).toBeVisible();
        await loginPage.enterCredentials(loginData.invalidUser.username,loginData.invalidUser.password);
        loginPage.page.on("dialog", async (alert) => {
            expect(alert.message()).toBe("Wrong password.");
            await alert.accept();
            await loginPage.clickLoginButton();
        });
        
    });
})