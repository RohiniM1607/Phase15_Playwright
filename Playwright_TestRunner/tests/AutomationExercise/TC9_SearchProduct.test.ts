import {test, expect} from '@playwright/test';

test('Search product', async({page})=>{
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
    await page.goto("http://automationexercise.com");
    await expect(page.locator('.carousel-inner').first()).toBeVisible();
    console.log("Home page - Verified");

    await page.getByRole('link', {name: " Products"}).click();
    expect(await page.locator(".single-products").count()).toBeGreaterThan(0);
    console.log("All products in Product page - Verified");

    const product = "Tops";
    await page.locator("input#search_product").click();
    await page.locator("input#search_product").clear();
    await page.locator("input#search_product").fill(product);
    await page.locator("button#submit_search").click();
    await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    const count = await page.locator(".single-products").count();
    console.log("Count of searched product: ", count);
    for (let i = 0; i < count; i++) {
        await page.getByRole("link", { name: "View Product" }).nth(i).click();
        console.log("Product:",await page.locator(".product-information h2").textContent());
        const category = await page.locator(".product-information p").filter({ hasText: "Category:" }).textContent();
        console.log(category);
        expect(category).toContain("Tops");
        await page.goBack();
        await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    }

    console.log("All Searched products - Verified")
})