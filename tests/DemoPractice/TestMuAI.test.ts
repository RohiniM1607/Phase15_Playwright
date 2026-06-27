import {test, expect} from '@playwright/test';

test('test input', async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    console.log("Title: ", await page.title());
    console.log("URL: ",await page.url());
    const message = await page.locator("#user-message").nth(0);
    console.log(message.getAttribute("placeholder"));
    console.log('Before entering value: '+ await message.inputValue())
    await message.fill("Admin");
    console.log('After entering value: '+ await message.inputValue())
    await page.getByRole('button', {name: "Get Checked Value"}).click();
    page.close();

})

test('test sum', async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    console.log("Title: ", await page.title());
    console.log("URL: ",await page.url());
    //console.log("Content: ", await page.content());
    let num1 = "8";
    let num2 = "2";
    let sum = Number(num1)+ Number(num2);
    console.log(sum);
    await page.getByText("Two Input Fields").evaluate((element) => {element.scrollIntoView();});
    await page.locator("#sum1").fill(num1);
    await page.locator("#sum2").fill(num2);
    await page.getByRole('button', { name: "Get Sum" }).click();
    await expect(page.locator("#addmessage")).not.toHaveText("");
    let result = await page.locator("#addmessage").textContent();
    console.log(result);
    await expect(await page.locator("#addmessage")).toHaveText(sum.toString());
}
)