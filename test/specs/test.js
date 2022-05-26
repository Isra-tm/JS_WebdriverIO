const {USERNAME, PASSWORD} = require("../fixtures/loginData.js");
const LoginPage = require("../pages/login.page");
const LandingPage = require("../pages/landing.page");

describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/`);
        await LoginPage.login(USERNAME, PASSWORD);
    });
});

describe('Add and Remove items from cart', () => {
    before(async () => {
        await browser.url(`https://www.saucedemo.com/`);
        await LoginPage.login(USERNAME, PASSWORD);
    });
    it('should add two items to the cart an then remove one', async () => {
        await LandingPage.addToCart();
        await LandingPage.removeFromCart();

    });
});

