import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../pages/LoginPage'
import Helper from '../../../helpers/helper'

let loginPage = new LoginPage()


When('\[Login page] I fill email with {string}', (email) => {
    loginPage.fillEmail(email)
})

When('\[Login page] I fill email with generated unique email', (email) => {
    loginPage.fillEmail(Helper.getUniqueEmail())
})

When("\[Login page] I fill password with {string}", (password) => {
    loginPage.fillPassword(password)
})

When("\[Login page] I click 'Log in' button", () => {
    loginPage.clickLoginButton()
})

When("\[Login page] I click 'Not yet a customer?' link", () => {
    loginPage.clickNotYetACustomerLink()
})

Then('\[Login page] Error message {string} shoud be shown', (errorMessage) => {
    loginPage.errorMessageIsShown(errorMessage)
})

Then ("[Login page] {string} message should be shown", (successMessage) => {
    loginPage.successMessageIsShown(successMessage)
})

