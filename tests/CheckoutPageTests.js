import IndexPage from '../pages/IndexPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import { checkoutData } from '../data/checkout'
import { errorMessages } from '../data/errorMessages'

const roles = require('../data/roles')


fixture('Checkout Tests').page `https://www.saucedemo.com/`

//Expected: TC07 Validate error message is displayed on the user’s information page.
roles.VALID_USERS.forEach(role => {    
    test('Continue without information '+role.USER, async t=>{
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.addMultipleItems()
        await InventoryPage.clickOnCartButton()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
        await CartPage.clickOnCkeckOutButton()
        await t.expect(CheckoutPage.postalCodeField.exists).ok()
        await CheckoutPage.clickContinueButton()
        await t.expect(CheckoutPage.errorCheckout.exists).ok()
        await t.expect(CheckoutPage.errorCheckout.innerText).eql(errorMessages.firstnameRequired.error)
    })
})

 //Expected: TC08 Validate the user navigates to the overview page once the data has been filled.
 roles.VALID_USERS.forEach(role => {    
    test('Validate personal information '+role.USER, async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.addMultipleItems()
        await InventoryPage.clickOnCartButton()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
        await CartPage.clickOnCkeckOutButton()
        await t.expect(CheckoutPage.postalCodeField.exists).ok()
        await CheckoutPage.fillPersonalInfo(checkoutData.VALID_DATA.firstname,
                                            checkoutData.VALID_DATA.lastname,
                                            checkoutData.VALID_DATA.postalcode)
        await CheckoutPage.clickContinueButton()
        await t.expect(CheckoutPage.paymentInfoText.exists).ok()
    })
})

//Expected: TC09 Validate items in the overview page match with the added items.
roles.VALID_USERS.forEach(role => {    
    test('Final order items '+role.USER, async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.addMultipleItems()
        await InventoryPage.clickOnCartButton()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
        await CartPage.clickOnCkeckOutButton()
        await t.expect(CheckoutPage.postalCodeField.exists).ok()
        await CheckoutPage.fillPersonalInfo(checkoutData.VALID_DATA.firstname,
                                            checkoutData.VALID_DATA.lastname,
                                            checkoutData.VALID_DATA.postalcode)
        await CheckoutPage.clickContinueButton()
        await t.expect(CheckoutPage.paymentInfoText.exists).ok()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
    })
})

//Expected: TC10 Validate the user navigates to the confirmation page.
roles.VALID_USERS.forEach(role => { 
    test('Complete a purchase '+role.USER, async t => {
        await IndexPage.loginSaucedemo(role.USER, role.PASSWORD)
        await t.expect(InventoryPage.productsLabel.exists).ok()
        await InventoryPage.addMultipleItems()
        await InventoryPage.clickOnCartButton()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
        await CartPage.clickOnCkeckOutButton()
        await t.expect(CheckoutPage.postalCodeField.exists).ok()
        await CheckoutPage.fillPersonalInfo(checkoutData.VALID_DATA.firstname,
                                            checkoutData.VALID_DATA.lastname,
                                            checkoutData.VALID_DATA.postalcode)    
        await CheckoutPage.clickContinueButton()
        await t.expect(CheckoutPage.paymentInfoText.exists).ok()
        await t.expect(CartPage.backPackText.exists).ok()
        await t.expect(CartPage.bikeLightText.exists).ok()
        await CheckoutPage.clickOnFinishButton()
        await t.expect(CheckoutPage.cowboyimg.exists).ok()
    })
})