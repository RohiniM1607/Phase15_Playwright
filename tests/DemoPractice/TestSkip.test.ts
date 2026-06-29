import { test,expect } from '@playwright/test';
test('Login test 1',async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    await page.click('#login2')
    await page.fill('#loginusername',"RohiniM");
    await page.fill('#loginpassword',"Rohini_16");
    await page.click('button[onclick="logIn()"]');
    const welcometxt = page.locator("#nameofuser").textContent();
    
    await expect.soft(welcometxt).tohavetext('Welcome RohiniM');
})
test.only("Login Test 2",async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    await page.click('#login2')
    await page.fill('#loginusername',"RohiniM");
    await page.fill('#loginpassword',"Rohini_16");
    await page.click('button[onclick="logIn()"]');
    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible();
    const welcometxt = page.locator("#nameofuser").textContent();
    expect(welcometxt).toContain('Welcome RohiniM');

})