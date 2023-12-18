import test, { expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import Homepage from "../src/pages/Homepage";
import BasePage from "../src/base/utils/BasePage";

var login;
var homepage;

test.beforeEach('Open new page and hit url',async({page})=>
{
    await new BasePage(page).hitUrl();
    login = new LoginPage(page);
    homepage = new Homepage(page);
});


test('Verify login fucntionality with valid credentials',async({page})=>
{
    test.setTimeout(90000);

    await login.enterUsername("bobadeswapnil94@gmail.com");
    await login.enterPassword("Abc@123");
    await login.clickOnLoginBtn();
    const text = await homepage.getMyAcountText();
    expect(text).toStrictEqual("My Account");
})
