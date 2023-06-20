

const Page = require('./page');
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
module.exports = class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}


