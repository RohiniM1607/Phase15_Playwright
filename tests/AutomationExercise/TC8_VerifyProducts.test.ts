import {test, expect} from '@playwright/test';

test('Verify Products', async({page}) =>{
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
    await expect(page).toHaveURL("https://automationexercise.com/products");
    console.log("Product page - Verified");
    await page.getByRole("link", {name: "View Product"}).first().click();
    await expect(page).toHaveURL("https://automationexercise.com/product_details/1");
    console.log("First product page - Verified");

    await expect(page.locator(".product-information")).toBeVisible();
    console.log("Product information is visible");
    await expect(page.locator(".product-information h2")).toBeVisible();
    console.log("Product name - Visible");
    await expect(page.locator(".product-information p").filter({ hasText: "Category:" })).toBeVisible();
    console.log("Product category - Visible");
    await expect(page.locator(".product-information span span")).toContainText("Rs.");
    console.log("Product price - Visible");
    await expect(page.locator(".product-information span label")).toContainText("Quantity");
    console.log("Product quantity - Visible");
    await expect(page.locator(".product-information p").filter({ hasText: "Availability:" })).toBeVisible();
    console.log("Product availability - Visible");
    await expect(page.locator(".product-information p").filter({ hasText: "Condition:" })).toBeVisible();
    console.log("Product condition - Visible");
    await expect(page.locator(".product-information p").filter({ hasText: "Brand:" })).toBeVisible();
    console.log("Product brand - Visible");
})