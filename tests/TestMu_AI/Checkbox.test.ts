import {test, expect} from '@playwright/test';
import { promises } from 'node:dns';

test.describe("CheckBox Test", () =>{
    test.beforeAll(async () =>{
        console.log("***Check Box test Demo***");
    })
    test.beforeEach(async({page})=>{
        await page.goto("https://www.testmuai.com/selenium-playground/");
        console.log("Navigated to Application");
        await expect(page.getByRole('heading', {name: "Selenium Playground"}));
        await page.getByRole('link', {name: "Checkbox Demo"}).click({ button: 'left' });
        await expect(page.getByRole('heading', {name: "Checkbox Demo"}));
        console.log("Navigated to CheckBox Demo page");
    })

    test.afterEach(async({page})=>{
        console.log("----- Test Completed -----");
    })

    test("Single checkbox", async({page})=>{
        await page.getByLabel("Click on check box").check();
        await expect(page.getByLabel("Click on check box")).toBeChecked();
        console.log("Single Checkbox Completed");
    })

    test("Disabled checkbox", async({page})=>{
        const checkboxes = page.locator(".mt-40").nth(1).locator("input[type='checkbox']");
        const count = await checkboxes.count();
        console.log("Total No of checkbox: ", count);
        for (let i = 0; i < count; i++) {
            const checkbox = checkboxes.nth(i);
            if (await checkbox.isEnabled()) {
                if (!(await checkbox.isChecked())) {
                    await checkbox.check();
                    console.log(`Checkbox ${i + 1} was unchecked. Now checked.`);
                } 
                else {
                    console.log(`Checkbox ${i + 1} is already checked.`);
                }

            } 
            else {
                console.log(`Checkbox ${i + 1} is disabled.`);
            }
        }   
    })

    test("Multiple Checkbox", async({page})=>{
        const checkbox = page.locator(".flex-wrap").nth(3).locator("input[type='checkbox']");
        const count =await checkbox.count();
        console.log("Total No of Checkbox: ", count);
        let checked = 0;
        await page.getByRole('button', {name: "Check All"}).click();
        for(let i=0; i < count; i++){
            if(await checkbox.nth(i).isChecked()){
                checked++;
            }
        }
        if(checked==count)
            console.log("All checkbox are checked");
    })
})