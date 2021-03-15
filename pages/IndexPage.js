import { Selector, t, Role } from 'testcafe'
//import { userRoles } from '../data/roles'
// const usernameField = Selector ('#user-name')
// const userPassword = Selector('#password')
// const loginButton = Selector('#login-button')
// const productLabel = Selector('.product_label')
//const errorIcon = Selector ('#login_button_container > div > form > h3') // Improve selector

class IndexPage {
    constructor() {
        this.usernameField = Selector ('#user-name')
        this.userPassword = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.productLabel = Selector('.product_label')
        this.errorIcon = Selector('#login_button_container div form h3') // Improve selector
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

// async function fillUsername(user){
//     await t.typeText(usernameField,user)
// }

// async function fillPassword(pswd){
//     await t.typeText(userPassword,pswd)
// }

// async function clickLoginButton(){
//     await t.click(loginButton)
// }

// async function validProductsLabel(){
//     await t.hover(productLabel)
// }

// async function loginSaucedemo(username,password){
//     await fillUsername(username)
//     await fillPassword(password)
//     await clickLoginButton()
//     await validProductsLabel()
// }

// async function validErrorMessage(username,password){
//     await fillUsername(username)
//     await fillPassword(password)
//     await clickLoginButton()
// }

// export const StandardUser = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await loginSaucedemo(userRoles.STANDARD_USER_COMPLETE.user, userRoles.VALID_PASSWORD.password)
// })
// export const ProblemUser = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await loginSaucedemo(userRoles.PROBLEM_USER.user, userRoles.VALID_PASSWORD.password)
// })
// export const PerformUser = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await loginSaucedemo(userRoles.PERFORM_USER.user, userRoles.VALID_PASSWORD.password)
// }) 
// export const LockedUser = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await validErrorMessage(userRoles.LOCKED_USER.user, userRoles.VALID_PASSWORD.password)
// })                
// export const EmptyUser = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await validErrorMessage(userRoles.NON_USER.user, userRoles.VALID_PASSWORD.password)
// })                    
// export const EmptyPassword = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await validErrorMessage(userRoles.STANDARD_USER_COMPLETE.user, userRoles.NON_PASSWORD.password)
// })                        
// export const EmptyLogin = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await validErrorMessage(userRoles.NON_USER.user, userRoles.NON_PASSWORD.password)
// })                            
// export const WrongLogin = Role(userRoles.SAUCEDEMO_URL.url, async t => {
//     await validErrorMessage(userRoles.INVALID_USER.user, userRoles.INVALID_PASSWORD.password)
//})