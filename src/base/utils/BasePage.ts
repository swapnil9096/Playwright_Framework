import { Page } from "@playwright/test";


export default class BasePage
{
    page : Page;

    public constructor(page:Page)
    {
        this.page = page;
    }

    public async hitUrl()
    {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    }

}