import {test, expect, Page } from "@playwright/test";
import LoginPagePage from "../src/pages/LoginPage.page";
import HomepagePage from "../src/pages/Homepage.page";
import BasePage from "../src/base/utils/BasePage";

test('Verify top categories links',async({browser,page})=>
{   
    test.setTimeout(90000);
     
    const login = new LoginPagePage(page);
    const homepage = new HomepagePage(page);

    await new BasePage(page).hitUrl();

    await login.getLogin("bobadeswapnil94@gmail.com","Abc@123");
    await homepage.clickOnShopByCategory();
    await homepage.VerifyTopCategoriesLinks();
    
});