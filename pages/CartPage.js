import { Selector, t } from 'testcafe'

class CartPage {
    constructor(){
        this.quantityText = Selector('.cart_quantity_label')
        this.backPackText = Selector('#item_4_title_link > div')
        this.bikeLightText = Selector('#item_0_title_link > div')
        this.removeButton = Selector('.btn_secondary cart_button')
        this.checkoutButton = Selector ('.btn_action.checkout_button').withExactText('CHECKOUT')
    }

    async clickOnCkeckOutButton(){
        await t.click(this.checkoutButton)
    }
}

export default new CartPage()