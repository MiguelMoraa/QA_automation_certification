import IndexPage from '../pages/IndexPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

const roles = require('../data/roles')

fixture('Cart Tests').page `https://www.saucedemo.com/`

//Expected: TC05 Validate the item has been added to the shopping cart.
roles.VALID_USERS.forEach(role => {    
    test('Add a Single Item to Cart '+role.USER , async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.clickOnAddBackPack()
        await InventoryPage.clickOnCartButton()
        await t.expect(CartPage.backPackText.exists).ok()
    })
})

//Expceted: TC06 Validate all the items that have been added to the shopping cart.
roles.VALID_USERS.forEach(role => {    
    test.only('Add multiple items to shopping Cart '+role.USER, async t =>{
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.addMultipleItems()
        await InventoryPage.clickOnCartButton()
        await InventoryPage.validateAddedItems()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
    })
})