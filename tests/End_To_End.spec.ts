import {test,expect} from "@playwright/test";
import LoginPagePage from "../src/pages/LoginPage.page";
import HomepagePage from "../src/pages/Homepage.page";
import End_To_End from "../src/pages/End_To_End";

test('Verify end to end flow',async({page})=>
{
    test.setTimeout(90000);
    const login    = new LoginPagePage(page);
    const endtoend = new End_To_End(page);

    login.hitUrl();
    await login.getLogin("bobadeswapnil94@gmail.com","Abc@123");
    await endtoend.selectCategoryTablet();
    await endtoend.enterProductName("Mac");
    await endtoend.clickOnSearchBtn();
    await endtoend.clickOnProduct();
    await endtoend.clickOnAddToCart();
    console.log(await endtoend.getSuccessAddToCartText());
    await endtoend.clickOnViewCartBtn();
    await endtoend.clickOnCheckoutBtn();
    await endtoend.enterMobileNumber("91 7249349096");
    await login.page.waitForTimeout(7000);
    await endtoend.selectWantNewAddress();
    await login.page.waitForTimeout(7000);
    await endtoend.enterFirstName("Swapnil");
    await login.page.waitForTimeout(7000);
    await endtoend.enterLastName("Bobade");
    await login.page.waitForTimeout(7000);
    await endtoend.enterAddress("Pune");
    await endtoend.enterCityName("Pune");
    await endtoend.enterPostalCode("411027");
    await endtoend.selectCountry("India");
    await login.page.waitForTimeout(7000);
    await endtoend.selectState("Maharashtra");
    await login.page.waitForTimeout(7000);
    // await endtoend.clickOnSameAddress();
    await login.page.waitForTimeout(7000);
    await endtoend.clickOnTermAndContion();
    await login.page.waitForTimeout(7000);
    await endtoend.clickOnContinueBtn();
    await endtoend.clickOnConfirmBtn();
    console.log(await endtoend.getPageTitle());

});