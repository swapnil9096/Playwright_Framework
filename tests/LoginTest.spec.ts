import test, { expect } from "@playwright/test";
import LoginPagePage from "../src/pages/LoginPage.page";
import HomepagePage from "../src/pages/Homepage.page";
import BasePage from "../src/base/utils/BasePage";


test('Verify login fucntionality with valid credentials',async({page})=>
{
    test.setTimeout(90000);
    await new BasePage(page).hitUrl();
    const login = new LoginPagePage(page);
    const homepage = new HomepagePage(page);

    await login.enterUsername("bobadeswapnil94@gmail.com");
    await login.enterPassword("Abc@123");
    await login.clickOnLoginBtn();
    const text = await homepage.getMyAcountText();
    expect(text).toStrictEqual("My Account");

})
