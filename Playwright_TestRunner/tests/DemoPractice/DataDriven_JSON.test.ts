import{test,expect} from "@playwright/test";
import loginData from "../../test-data/loginData.json";
interface LoginData{
    testName:String;
    username:string;
    password:string;
    expectedResult:"Success"|"Failure";
    expectedMessage:string
}
const users=loginData as LoginData[];
for(const data of users){
    test(`${data.testName}-${data.username||"Blank Username"}`,async({page})=>{
        await page.goto("https://demoblaze.com/");
        await page.click("#login2");
        await page.fill("#loginusername",data.username);
        await page.fill('#loginpassword',data.password);
        if(data.expectedResult==="Failure"){
            page.once("dialog",async dialog=>{
                expect(dialog.message()).toBe(data.expectedMessage);
                await dialog.accept();
            });
        }
        await page.click("button[onclick='logIn()']");
        //success validation
        if(data.expectedResult==="Success"){
            await page.waitForTimeout(2000);
            await expect(page.locator('#nameofuser')).toBeVisible({timeout:10000});
            await expect(page.locator("#nameofuser")).toContainText(`Welcome ${data.username}`);
        }
    })
}