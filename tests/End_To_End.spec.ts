import {test,expect} from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import Homepage from "../src/pages/Homepage";
import End_To_End from "../src/pages/End_To_End";
import BasePage from "../src/base/utils/BasePage";

var login;
var endtoend;

test.beforeEach('Open new page and hit url', async({page})=>
{
     login    = new LoginPage(page);
     endtoend = new End_To_End(page);
     await new BasePage(page).hitUrl();
})

test('Verify end to end flow',async({page})=>
{
    test.setTimeout(90000);
    
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
    await endtoend.selectWantNewAddress();
    await endtoend.enterFirstName("Swapnil");
    await endtoend.enterLastName("Bobade");
    await endtoend.enterAddress("Pune");
    await endtoend.enterCityName("Pune");
    await endtoend.enterPostalCode("411027");
    await endtoend.selectCountry("India");
    await endtoend.selectState("Maharashtra");
    // await endtoend.clickOnSameAddress();
    await endtoend.clickOnTermAndContion();
    await endtoend.clickOnContinueBtn();
    // await endtoend.clickOnConfirmBtn();
    // console.log(await endtoend.getPageTitle());

});