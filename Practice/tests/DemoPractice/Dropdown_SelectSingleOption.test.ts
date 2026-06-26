import {test, expect} from '@playwright/test';

test('dropdown single select', async({page}) =>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo", {
        value: "Friday"
    })
    await expect(page.locator(".selected-value text-size-14")).toHaveText("Day selected :- Friday");
})



test('dropdown multi select', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");

    await page.locator("#multi-select").selectOption([
        { label: "Texas" },
        { index: 2 },
        { value: "Washington" }
    ]);
})