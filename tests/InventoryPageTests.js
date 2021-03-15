import IndexPage from '../pages/IndexPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

const roles = require('../data/roles')

fixture('Inventory Tests').page `https://www.saucedemo.com/`

// Expected: TC04 Validate the user navigates to the shopping cart page.
roles.VALID_USERS.forEach(role => {    
    test('Navigate to the shopping cart '+ role.USER, async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.clickOnCartButton()
        await t.expect(CartPage.quantityText.exists).ok()
    })
})