import { config as baseconfig} from "./wdio.conf";

export const config={
    ...baseconfig,
    hostname:'localhost',
    port:4444,
    path:'/',
     services: ['docker'],
     capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome', // or "firefox", "microsoftedge", "safari""safebrowsing.enabled":true
        "goog:chromeOptions": {
            args: [
                '--safebrowsing-disable-download-protection',
            '--no-sandbox',
            '--disable-infobars',
            '--headless',
            '--disable-gpu',
            '--window-size=1440,735'],
            prefs: {
                'directory_upgrade': true,
                'prompt_for_download': false,
                'download.default_directory': global.downloadDir
              }
            }
    }]
}