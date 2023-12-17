import { Locator, Page } from "@playwright/test";
import BasePage from "../base/utils/BasePage";

export default class utilities extends BasePage
{
    text: any;

    constructor(page:Page)
    {
        super(page);
    }


    
    public async findLocator(value:string, options?:{
        frame?: string, 
        tabId?:number,
        timeOut?:number,
        has?:Locator,
        hasText?:string 
    }):Promise<Locator>
    {
        if(options?.frame)
        {
            this.page.frameLocator(options.frame).locator(value,{has:options?.has, hasText: options?.hasText})
        }
        if(options?.tabId)
        {
            this.page = this.page.context().pages()[options.tabId]
        }

        return this.page.locator(value,{has:options?.has, hasText: options?.hasText})
    }

    public async getText(str:string):Promise<string>
    {
       const ele = await this.findLocator(str);
        this.text = await ele.textContent();

       return this.text;
    }

    public async getUrl():Promise<string>
    {
        return await this.page.url();
    }

}