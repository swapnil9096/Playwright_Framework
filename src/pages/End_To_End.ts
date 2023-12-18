import { Page } from "@playwright/test";
import BasePage from "../base/utils/BasePage";

export default class extends BasePage {
     //Calling basepage constructor
     constructor(page: Page) {
          super(page);
     }
     //=============================================================================================
     //Locators
     selectCategoryBtn = "(//button[@type='button'])[1]";
     selectTablet = "(//a[@data-category_id='57'])[1]";
     searchfiled = "(//input[@name='search'])[1]";
     searchBtn = "(//button[@type='submit'])[1]";
     macBookProduct = "(//div[@class='carousel-item active'])[2]";
     addToCart = "(//button[@title='Add to Cart'])[2]";
     addSuccessCart = "//*[@class='d-flex mb-3 align-items-start']/p";
     viewCart = "//a[@class='btn btn-primary btn-block']";
     checkout = "(//*[@class='buttons d-flex']/a)[2]";
     mobileNumber = "[id='input-telephone']";
     wantNewAddress = "(//label[@class='custom-control-label'])[2]";
     firstName = "[name='firstname']";
     lastName = "[name='lastname']";
     address = "[name='address_1']";
     city = "[name='city']";
     postalCode = "[name='postcode']";
     country = "[id='input-payment-country']";
     state = "[name='zone_id']";
     sameAddCheckbox = "(//*[@class='custom-control-label'])[1]";
     termAndConCkBox = "(//*[@class='custom-control-label'])[5]";
     contiueBtn = "//button[@id='button-save']";
     confirmBtn = "//button[@id='button-confirm']";
     //get Title after all to verify test

     //=============================================================================================    

     //Methods for each locator

     //Click on the Select category dropdown
     public async selectCategoryTablet() {
          await this.page.locator(this.selectCategoryBtn).click();
          await this.page.locator(this.selectTablet).click();
     }

     //Entering product name
     public async enterProductName(productName) {
          await this.page.locator(this.searchfiled).fill(productName);
     }

     //Clicking on search button
     public async clickOnSearchBtn() {
          await this.page.locator(this.searchBtn).click();
     }

     //Click on the product
     public async clickOnProduct() {
          await this.page.locator(this.macBookProduct).click();
     }

     //Click on addToCart
     public async clickOnAddToCart() {
          await this.page.locator(this.addToCart).click();
     }

     //Getting the text of added item successfully into the cart
     public async getSuccessAddToCartText() {
          return await this.page.locator(this.addSuccessCart).textContent();
     }

     //Click on view cart
     public async clickOnViewCartBtn() {
          await this.page.locator(this.viewCart).click();
     }

     //Click on checkout button
     public async clickOnCheckoutBtn() {
          await this.page.locator(this.checkout).click();
     }

     //Enter Mobile number
     public async enterMobileNumber(mobNo) {
          await this.page.locator(this.mobileNumber).clear();
          await this.page.locator(this.mobileNumber).fill(mobNo);
     }

     //Select radio button for i want to use new address
     public async selectWantNewAddress() {
          await this.page.locator(this.wantNewAddress).last().click();
     }

     //Enter first name
     public async enterFirstName(fName) {
          await this.page.locator(this.firstName).clear();
          await this.page.locator(this.firstName).fill(fName);
     }

     //Enter last name

     public async enterLastName(lname) {
          await this.page.locator(this.lastName).clear();
          await this.page.locator(this.lastName).fill(lname);
     }

     //Enter address
     public async enterAddress(add) {
          await this.page.locator(this.address).clear();
          await this.page.locator(this.address).fill(add);
     }

     //Enter city
     public async enterCityName(cityName) {
          await this.page.locator(this.city).clear();
          await this.page.locator(this.city).fill(cityName);
     }

     //Enter postal code
     public async enterPostalCode(code) {
          await this.page.locator(this.postalCode).fill(code);
     }

     //Select Country
     public async selectCountry(countryName) {
          await this.page.locator(this.country).selectOption(countryName);
     }

     //Select state
     public async selectState(stateName) {
          await this.page.locator(this.state).selectOption(stateName);
     }

     //Select same address checkbox
     public async clickOnSameAddress() {
          if (!await this.page.locator(this.sameAddCheckbox).isChecked())
               await this.page.locator(this.sameAddCheckbox).click();
     }

     //Click on term and condition checkbox
     public async clickOnTermAndContion() {
          await this.page.locator(this.termAndConCkBox).click();
     }

     //Click on continue button
     public async clickOnContinueBtn() {
          await this.page.locator(this.contiueBtn).click();
     }

     //Click on confirm button
     public async clickOnConfirmBtn() {
          await this.page.locator(this.confirmBtn).click();
     }

     //Getting page title to verify the test
     public async getPageTitle() {
          return await this.page.title();
     }
}