import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import UserRegistrationPage from '../../../pages/UserRegistrationPage'
import Helper from '../../../helpers/helper'

let userRegistrationPage = new UserRegistrationPage()

When("\[User Registration page] I fill email with {string}", (email) => {
    userRegistrationPage.fillEmail(email)
})

When("\[User Registration page] I fill email with generated unique email", () => {
    userRegistrationPage.fillEmail(Helper.getUniqueEmail())
})

When("\[User Registration page] I fill password with {string}", (password) => {
    userRegistrationPage.fillPassword(password)
})

When("\[User Registration page] I repeat password with {string}", (password) => {
    userRegistrationPage.fillRepeatPassword(password)
})

When("\[User Registration page] I select {string} security question", (securityType) => {
    userRegistrationPage.selectSecurityQuestionType(securityType)
})

When("\[User Registration page] I fill answer with {string}", (answer) => {
    userRegistrationPage.fillAnswer(answer)
})

When("\[User Registration page] I click 'Register' button", () => {
    userRegistrationPage.clickRegisterButton()
})

Then("\[User Registration page] 'Register' button should be disabled", () => {
    userRegistrationPage.registerButtonIsDisabled()
})

Then("\[User Registration page] 'Register' button should be enabled", () => {
    userRegistrationPage.registerButtonIsEnabled()
})

Then("\[User Registration page] error message {string} for email field should be shown", message => {
    userRegistrationPage.emailErrorMessageShouldBeShown(message)
})

Then("\[User Registration page] error message {string} for password field should be shown", message => {
    userRegistrationPage.passwordErrorMessageShouldBeShown(message)
})

Then("\[User Registration page] error message {string} for repeat password field should be shown", message => {
    userRegistrationPage.repeatPaswordErrorMessageShouldBeShown(message)
})
