import Page from "./page";
import { $ } from '@wdio/globals';

class CartPage extends Page {

    get cartItem() {
        return $('//div[@data-test="inventory-item-name"]');
    }

    async validateCartItem(itemName) {
        await expect(this.cartItem).toHaveText(itemName);
    }

    open() {
        return super.open("cart.html");
    }
}

export default new CartPage();
