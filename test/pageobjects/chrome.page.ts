import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChromePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get downloadLink () {
        return $(`//*[@alt='a crowd of people at a concert with their hands in the air']`);
    }
    public get downloadLinkDropDown () {
        return $(`//*[text()='Download free']`);
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async ClickDownload () {
        await browser.pause(5000);
        await this.downloadLink.click();
        await browser.pause(5000);
        await this.downloadLinkDropDown.click();
        
        await browser.pause(15000);
    }
}

export default new ChromePage();
