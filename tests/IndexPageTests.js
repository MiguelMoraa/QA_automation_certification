import InventoryPage from '../pages/InventoryPage'
import IndexPage from '../pages/IndexPage'

const roles = require('../data/roles')

fixture('Index Page Test').page `https://www.saucedemo.com/`

//Expected: TC01 Validate the user navigates to the product’s page.
roles.VALID_USERS.forEach(role => {    
    test('Login with a valid user '+ role.USER, async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
    })
})

//Expected: TC02 Validate error message is displayed.
roles.INVALID_USERS.forEach(role => {
    test('Login with an invalid user '+ role.USER, async t => { 
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(IndexPage.errorIcon.innerText).eql(role.ERRORMESSAGE)
    })
})

// Expected: TC03 Validate the user navigates to the login page. 
roles.VALID_USERS.forEach(role => {    
    test('Logout from Product`s Page ' + role.USER, async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.logoutSaucedemo()
        await t.expect(IndexPage.usernameField.exists).ok()
    })
})