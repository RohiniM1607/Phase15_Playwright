import {test, expect} from "@playwright/test";

test("Contact us", async({page})=>{
    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });
    page.on("dialog", async (alert) => {
        console.log("Alert Type:", alert.type());
        console.log("Alert Message:", alert.message());
        await alert.accept();
    });
    await page.goto("https://automationexercise.com/", {
        waitUntil: "domcontentloaded"
    });
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");
    
    await page.getByRole('link', {name: " Contact us"}).click();
    await expect(page.getByRole('heading', {name: "Get In Touch"})).toBeVisible();
    console.log("Contact page - Verified");

    await page.getByPlaceholder("Name").fill("Demo");
    const email = await page.locator("input[name='email']").fill("demo.1@gmail.com");
    
    await page.getByPlaceholder("Subject").fill("Testing");
    await page.getByPlaceholder("Your Message Here").fill("This message is to test the input box in contact us form");
    console.log("Form details entered");

    const fileInput = page.locator("input[name='upload_file']");
    if ((await fileInput.inputValue()) === '') {
        await expect(fileInput).toHaveValue('');
        fileInput.click();
        await fileInput.setInputFiles("C:\\Users\\User\\Downloads\\KIOT_SDET_2026_Python_Selenium_Assessment24.pdf");
        console.log("File uploaded");
    }
    else{
        console.log("File already uploaded");
    }
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);
    
    await expect(page.locator("//div[@class='status alert alert-success']")).toHaveText("Success! Your details have been submitted successfully.");
    console.log("Details submitted");
})