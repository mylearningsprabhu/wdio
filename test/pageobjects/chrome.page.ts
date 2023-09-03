import * as path from 'path'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChromePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get textBox() {
        return $(`//*[@id='textbox']`);
    }
    public get clickGenerate() {
        return $(`//*[@id='createTxt']`);
    }
    public get clickDownloadLink() {
        return $(`//*[@id='link-to-download']`);
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async ClickDownload () {
        await browser.pause(3000);
       // await path.join(global.downloadDir,"TestTestTEst");
        await this.textBox.setValue('Test data');
       await browser.pause(3000)
       await this.clickGenerate.click();
       await browser.pause(3000)
       await this.clickDownloadLink.click();
       await browser.pause(3000)

        
        //await this.downloadLinkDropDown.click();
        
    }
}

export default new ChromePage();
