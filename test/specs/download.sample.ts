import ChromePage from '../pageobjects/chrome.page.js'
import helper from '../utility/helper.js';
import Helper from '../utility/helper.js'

describe('Download verificaiton', () => {
    it('file should be downloaded to desired location', async () => {
        /*   //https://www.lambdatest.com/blog/download-files-using-javascript-selenium/
           //https://blog.kevinlamping.com/downloading-files-using-webdriverio/;*/
        await browser.url('https://demo.automationtesting.in/FileDownload.html');
        await ChromePage.ClickDownload()
        await console.log(process.cwd() + "      djhgshjgfdddddddddddddddddddddddddddd")
        await expect(helper.gettempDownloadDirFileCount()).toEqual(1)
        
    })
})


