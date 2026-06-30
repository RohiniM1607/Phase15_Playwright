import{test, expect} from '@playwright/test';

const searchData = [
    {keyword: "Playwright", expectedTitle: "Playwright"},
    {keyword: "Selenium", expectedTitle: "Selenium"},
    {keyword: "Cypress", expectedTitle: "Cypress"}
];

test.describe("Google search ", ()=>{
    for(const data of searchData){
        test(`Search Flow - ${data.keyword}`, async({page})=>{
            await page.goto("https://www.google.com");

            await page.locator("textarea[name='q']").fill(data.keyword);
            await page.keyboard.press("Enter");

            const firstResult = page.locator("h3").first();
            await firstResult.click();

            await expect(page).toHaveTitle(new RegExp(data.expectedTitle, "i"));
        })
    }
})