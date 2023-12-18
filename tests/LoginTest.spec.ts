import test, { expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import Homepage from "../src/pages/Homepage";
import BasePage from "../src/base/utils/BasePage";


test('Verify login fucntionality with valid credentials',async({page})=>
{
    test.setTimeout(90000);
    await new BasePage(page).hitUrl();
    const login = new LoginPage(page);
    const homepage = new Homepage(page);

    await login.enterUsername("bobadeswapnil94@gmail.com");
    await login.enterPassword("Abc@123");
    await login.clickOnLoginBtn();
    const text = await homepage.getMyAcountText();
    expect(text).toStrictEqual("My Account");

})
