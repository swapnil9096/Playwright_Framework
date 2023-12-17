
import { Locator, Page, expect } from "@playwright/test";
import BasePage from "../base/utils/BasePage";
import utilities from "../common/Utilities";


export default class extends BasePage
{
    text:any;
    constructor(public page:Page)
    {
        super(page);
    }

    //Locators
    myAcountHeader = "(//h2[@class='card-header h5'])[1]";
    topCategoriesLinks = "//div[@id='entry_217840']//div//div/ul/li[@class='nav-item']";
    shopByCategory = " Shop by Category";

    public async getMyAcountText():Promise<string>
    {
        return new utilities(this.page).getText(this.myAcountHeader);
    }

    public async clickOnShopByCategory()
    {
        await this.page.getByText(this.shopByCategory).click();
    }

    public async VerifyTopCategoriesLinks()
    {
        let arr:Promise<Locator[]> = this.page.locator(this.topCategoriesLinks).all();
        for(let i=0;i<(await arr).length;i++)
        {
            if(i!=0)
            {
                await this.clickOnShopByCategory();
                (await arr).at(i)?.click();
                await this.page.waitForTimeout(3000);
                this.text = await new utilities(this.page).getUrl();
                expect(this.text).toEqual(expect.stringContaining("https"));
            }else
            {
                (await arr).at(i)?.click();
                await this.page.waitForTimeout(3000);
                this.text = await new utilities(this.page).getUrl();
                expect(this.text).toEqual(expect.stringContaining("https"));
            }
        }
    }
}