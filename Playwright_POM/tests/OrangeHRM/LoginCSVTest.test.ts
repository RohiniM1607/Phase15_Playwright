import {test, expect} from '../../fixtures/BaseFixture';
import {readLoginData, LoginUser} from '../../utils/csvReader'

const users: LoginUser[] = readLoginData();

console.log('CSV data: ', users);

const validUser = users.find(user=>user.type==='valid');
const invalidUser = users.find(users=>users.type === 'invalid');
test.describe('Login Tests', ()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    });
    test('Valid Login', async({loginPage, dashboardPage})=>{
        if(!validUser){
            throw new Error('Valid user not found in loginData.csv');
        }
        await loginPage.login(validUser.username, validUser.password);
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    });

    test('Invalid Login', async({loginPage})=>{
        if(!invalidUser){
            throw new Error('Invalid user not found in loginData.csv');
        }
        await loginPage.login(invalidUser.username, invalidUser.password);
        await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    });



})