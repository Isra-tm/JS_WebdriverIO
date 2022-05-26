class LandingPage {

    get btnAddCartBackpack() {
        return browser.$('//button[@name="add-to-cart-sauce-labs-backpack"]');
    }

    get btnAddCartBikeLight() {
        return browser.$('//button[@name="add-to-cart-sauce-labs-bike-light"]');
    }

    get btnCartContainer() {
        return browser.$('#shopping_cart_container');
    }

    get btnRemoveBikeLight() {
        return browser.$('#remove-sauce-labs-bike-light');
    }

    get btnRemoveBackpack() {
        return browser.$('#remove-sauce-labs-backpack');
    }

    async addToCart() {
        await this.btnAddCartBackpack.click();
        await this.btnAddCartBikeLight.click();
    }

    async removeFromCart() {
        await this.btnCartContainer.click();
        await this.btnRemoveBikeLight.click();

        await expect(this.btnRemoveBackpack).toBeExisting();
    }

};

module.exports = new LandingPage();