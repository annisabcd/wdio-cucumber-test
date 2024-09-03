import Page from "./page";
import { $ } from '@wdio/globals';

class InventoryPage extends Page {

    get firstItemAddToCartButton() {
        return $('//button[@data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get cartIcon() {
        return $('//a[@class="shopping_cart_link"]');
    }

    async addItemToCart() {
        await this.firstItemAddToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    open() {
        return super.open("inventory.html");
    }
}

export default new InventoryPage();
