import {test, expect} from '@playwright/test';

test('Iterate windows', async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows/");
    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState();
    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await window.waitForLoadState();
    const pages = context.pages();
    console.log("Number of Pages: ", pages.length);
    for(const p of pages){
        console.log("-------------");
        console.log("URL: ", p.url());
        console.log("Title: ",p.title());
    }
});

test('Iterate windows attribute', async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows/");
    const [newtab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await newtab.waitForLoadState();
    const [newwindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newwindow.waitForLoadState();
    const pages = context.pages();
    console.log("Number of Pages: ", pages.length);
    for(const p of pages){
        console.log("URL: ", p.url());
        if(p.url().includes('sample')){
            const text=await p.locator("#sampleHeading").textContent();
            console.log("Sample Page Heading:",text);
        }
        
    }
})