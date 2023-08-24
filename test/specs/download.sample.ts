import SecurePage from '../pageobjects/secure.page.js'
import LoginPage from '../pageobjects/login.page.js'

describe('Download verificaiton', () => {
    it('file should be downloaded to desired location', async () => {
        await browser.url('https://www.softwaretestinghelp.com/sample-test-cases-testing-web-desktop-applications/');

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})


