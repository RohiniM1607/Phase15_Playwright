import {test, expect} from '@playwright/test';

test.describe("Upload file Test", () =>{
    test.beforeAll(async () =>{
        console.log("***Upload File test Demo***");
    })
    test.beforeEach(async({page})=>{
        await page.goto("https://www.testmuai.com/selenium-playground/");
        console.log("Navigated to Application");
        await expect(page.getByRole('heading', {name: "Selenium Playground"}));
        await page.getByRole('link', {name: "Upload File Demo"}).click({ button: 'left' });
        await expect(page.getByRole('heading', {name: "Upload File Demo"}));
        console.log("Navigated to Upload File Demo page");
    })

    test.afterEach(async({page})=>{
        console.log("----- Test Completed -----");
    })

    test("Upload single file", async({page})=>{
        const fileInput = page.locator('input[type="file"]');

        if ((await fileInput.inputValue()) === '') {
            await expect(fileInput).toHaveValue('');
            fileInput.click();
            await fileInput.setInputFiles("C:\\Users\\User\\Downloads\\KIOT_SDET_2026_Python_Selenium_Assessment24.pdf");
            await expect(page.getByText("File Successfully Uploaded"));
            console.log("File uploaded");
        }
        else{
            console.log("File already uploaded");
        }
    })

    test("Invalid file format upload", async({page})=>{
        const fileInput = page.locator('input[type="file"]');
        const filePath = "C:\\Users\\User\\Downloads\\node-v24.16.0-x64.msi";

        await fileInput.setInputFiles(filePath);

        if (filePath.match(/\.(pdf|png|jpe?g)$/i)) {
            await expect(page.getByText("File Successfully Uploaded")).toBeVisible();
            console.log("Valid file uploaded");
        } 
        else {
            await expect(page.getByText("File type should be pdf, png, jpeg or jpg")).toBeVisible();
            console.log("Invalid file format");
        }
    })

})