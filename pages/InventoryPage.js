import { Selector, t, Role } from 'testcafe'


class InventoryPage { 
    constructor() {
        this.productsLabel = Selector('.product_label')
        this.burgerbutton = Selector('#react-burger-menu-btn')
        this.logoutbutton = Selector('#logout_sidebar_link')
        this.addToCartButton = Selector('.btn_primary.btn_inventory')
        this.cartIcon = Selector('#shopping_cart_container > a > svg') //Improve this selector
        this.addBackPack = Selector ('#inventory_container > div > div:nth-child(1) > div.pricebar > button') //Impove Selector
        this.addBikeLight = Selector ('#inventory_container > div > div:nth-child(2) > div.pricebar > button')//Impove Selector
    }

    async clickOnBurgerButton() {
        await t.click(this.burgerbutton)
    }
    
    async clickOnLogout() {
        await t.click(this.logoutbutton)
    }

    async logoutSaucedemo() {
        await this.clickOnBurgerButton()
        await this.clickOnLogout()
    }

    async clickOnCartButton(){
        await t.click(this.cartIcon)
    }

    async clickOnAddBackPack(){
        await t.click(this.addBackPack)
    }

    async addMultipleItems(){
        await t.click(this.addBikeLight)
        await t.click(this.addBackPack)
    }
}

export default new InventoryPage()