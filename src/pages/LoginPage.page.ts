import { Page } from "@playwright/test";
import BasePage from "../base/utils/BasePage";
import utilities from "../common/Utilities";

export default class extends BasePage
{
    constructor(public page:Page)
    {
        super(page);
    }

    //Locaters
    userName ="//input[@name='email']";
    password ="//input[@name='password']";
    loginBtn ="//input[@type='submit']";


    public async enterUsername(name:string)
    {
        const user =  await new utilities(this.page).findLocator(this.userName);
        await user.fill(name);
    }

    public async enterPassword(pass:string)
    {
        const pswd = await new utilities(this.page).findLocator(this.password);
        await pswd.fill(pass);
    }

    public async clickOnLoginBtn()
    {
        const lgnBtn = await new utilities(this.page).findLocator(this.loginBtn);
        await lgnBtn.click();
    }

    public async getLogin(un:string,pass:string)
    {
        await this.enterUsername(un);
        await this.enterPassword(pass);
        await this.clickOnLoginBtn();
    }
}