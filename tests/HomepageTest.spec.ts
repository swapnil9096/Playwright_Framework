import {test, expect, Page } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import BasePage from "../src/base/utils/BasePage";
import Homepage from "../src/pages/Homepage";
var login;
var homepage;

test.beforeEach('Initialize browser with url',async({page})=>
{
    login = new LoginPage(page);
    homepage = new Homepage(page);

    await new BasePage(page).hitUrl();
});

test('Verify top categories links',async({page})=>
{   
    test.setTimeout(90000);

    await login.getLogin("bobadeswapnil94@gmail.com","Abc@123");
    await homepage.clickOnShopByCategory();
    await homepage.verifyTopCategoriesLinks();
});

test('Verify my account hyperlinks', async({page})=>
{
    test.setTimeout(90000);

    await login.getLogin("bobadeswapnil94@gmail.com","Abc@123");
    await page.waitForTimeout(4000);
    await homepage.verifyMyAccountHyperlinks();
});

test('Verify my order hyperlinks',async({page})=>
{
    test.setTimeout(90000);
    await login.getLogin("bobadeswapnil94@gmail.com","Abc@123");
    await page.waitForTimeout(4000);
    await homepage.verifyMyOrdersLinks();
})