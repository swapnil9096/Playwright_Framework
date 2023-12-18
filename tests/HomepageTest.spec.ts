import {test, expect, Page } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import BasePage from "../src/base/utils/BasePage";
import Homepage from "../src/pages/Homepage";

test('Verify top categories links',async({page})=>
{   
    test.setTimeout(90000);
     
    const login = new LoginPage(page);
    const homepage = new Homepage(page);

    await new BasePage(page).hitUrl();

    await login.getLogin("bobadeswapnil94@gmail.com","Abc@123");
    await homepage.verifyMyAccountHyperlinks();
    await homepage.verifyMyOrdersLinks();
    await homepage.clickOnShopByCategory();
    // await homepage.verifyTopCategoriesLinks();
    // await homepage.verifyMyAccountHyperlinks();
    
    
});