const {headerText} = require('../fixtures/headerText');

class LoginPage {

    get inputUsername () {
        return browser.$('#user-name');
    }

    get inputPassword () {
        return browser.$('#password');
    }

    get btnLogin () {
        return browser.$('//input[@data-test="login-button"]');
    }

    get pageHeader () {
        return browser.$('.header_secondary_container');
    }

    get headerText () {
        return browser.$('.title');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();

        await expect(this.pageHeader).toBeExisting();
        await expect(this.headerText).toHaveTextContaining(headerText);
    }

};

module.exports = new LoginPage();