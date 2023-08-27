import * as path from 'path'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChromePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get downloadLink () {
        return $(`//a[text()=' Download the above Test Case Template(.xls)']`);
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
        //await path.join(global.downloadDir,"TestTestTEst");
        await this.downloadLink.click();
       await browser.pause(30000)
        
        //await this.downloadLinkDropDown.click();
        
    }
}

export default new ChromePage();
