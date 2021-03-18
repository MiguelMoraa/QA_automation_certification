import { Selector, t, Role } from 'testcafe'

class IndexPage {
    constructor() {
        this.usernameField = Selector ('#user-name')
        this.userPassword = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.productLabel = Selector('.product_label')
        this.errorIcon = Selector('#login_button_container div form h3')
    }

    async fillUsername(user){
        await t.typeText(this.usernameField,user)
    }

    async fillPassword(pswd){
        await t.typeText(this.userPassword,pswd)
    }

    async clickLoginButton(){
        await t.click(this.loginButton)
    }

    async loginSaucedemo(username,password){
        if(username != "")        
            await this.fillUsername(username)
        if(password != "")
            await this.fillPassword(password)
        await this.clickLoginButton()
    }
}

export default new IndexPage()