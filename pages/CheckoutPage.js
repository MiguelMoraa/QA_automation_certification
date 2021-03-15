import { Selector , t, Role } from 'testcafe'

class CheckoutPage {
    constructor() {
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector ('input[value="CONTINUE"]')
        this.errorCheckout = Selector('#checkout_info_container div form h3')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector ('#last-name')
        this.postalCode = Selector('#postal-code') 
        this.paymentInfoText = Selector('.summary_info_label')
        this.cowboyimg = Selector ('#checkout_complete_container > img')
        this.finishbutton = Selector('.btn_action.cart_button')
    }
    async clickContinueButton(){
        await t.click(this.continueButton)
    }

    async fillFirstName(frstname){
        await t.typeText(this.firstNameField,frstname)
    }

    async fillLastName(lstname){
        await t.typeText(this.lastNameField,lstname)
    }

    async fillPostalCode(pstcode){
        await t.typeText(this.postalCode,pstcode)
    }

    async fillPersonalInfo(firstname, lastname, postalcode){
        await this.fillFirstName(firstname)
        await this.fillLastName(lastname)
        await this.fillPostalCode(postalcode)
    }

    async clickOnFinishButton(){
        await t.click(this.finishbutton)
    }

}

export default new CheckoutPage()