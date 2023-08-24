import ChromePage from '../pageobjects/chrome.page.js'

describe('Download verificaiton', () => {
    it('file should be downloaded to desired location', async () => {
        await browser.url('https://unsplash.com/images');
await ChromePage.ClickDownload();
    })
})


