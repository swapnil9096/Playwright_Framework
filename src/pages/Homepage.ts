
import { Locator, Page, expect } from "@playwright/test";
import BasePage from "../base/utils/BasePage";
import utilities from "../common/Utilities";


export default class extends BasePage 
{
    text: any;
    constructor(public page: Page) 
    {
        super(page);
    }

    //Locators
    myAcountHeader = "(//h2[@class='card-header h5'])[1]";
    topCategoriesLinks = "//div[@id='entry_217840']//div//div/ul/li[@class='nav-item']";
    shopByCategory = " Shop by Category";
    MyAccountHyperlinks = "[class='col-6 col-sm-4 col-lg-2_4']";
    myOrdersHyperlinks = "(//*[@class='card-body text-center'])[2]/div/div";


    public async getMyAcountText(): Promise<string> 
    {
        return new utilities(this.page).getText(this.myAcountHeader);
    }

    public async clickOnShopByCategory() 
    {
        await this.page.getByText(this.shopByCategory).click();
    }

    public async verifyTopCategoriesLinks() 
    {
        let arr: Promise<Locator[]> = this.page.locator(this.topCategoriesLinks).all();
        for (let i = 0; i < (await arr).length; i++) 
        {
            if (i != 0) 
            {
                await this.clickOnShopByCategory();
                (await arr).at(i)?.click();
                await this.page.waitForTimeout(3000);
                this.text = await new utilities(this.page).getUrl();
                expect(this.text).toEqual(expect.stringContaining("https"));
            } else 
            {
                (await arr).at(i)?.click();
                await this.page.waitForTimeout(3000);
                this.text = await new utilities(this.page).getUrl();
                expect(this.text).toEqual(expect.stringContaining("https"));
            }
        }
    }


    public async verifyMyAccountHyperlinks() 
    {
        const myAccountLinks: Promise<Locator[]> = this.page.locator(this.MyAccountHyperlinks).all();
        const arr: string[] = ["My Account Information", "Change Password", "Address Book Entries", "My Wish List", "Newsletter Subscription"];
        for (let i = 0; i < arr.length; i++) 
        {
            (await myAccountLinks).at(i)?.click();
            expect(await this.page.locator("h1[class='page-title h3 mb-3']").textContent()).toEqual(arr[i]);
            await this.page.goBack();
        }
    }

    public async verifyMyOrdersLinks() 
    {
        const myOrderLinks: Promise<Locator[]> = this.page.locator(this.myOrdersHyperlinks).all();
        console.log((await myOrderLinks).length);
        const arr: string[] = ["Order History", "Account Downloads", "Your Reward Points", "Product Returns", "Your Transactions", "Recurring Payments"];
        for (let i = 0; i < arr.length; i++) 
        {
            (await myOrderLinks).at(i)?.click();
            expect(await this.page.locator("h1[class='page-title h3 mb-3']").textContent()).toEqual(arr[i]);
            await this.page.goBack();
        }
    }

}