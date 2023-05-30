import { Given } from 'cypress-cucumber-preprocessor/steps'
import Helper from '../../../helpers/helper'
import TopNavbar from '../../../pages/TopNavbarPage'
import LoginPage from '../../../pages/LoginPage'
import UserRegistrationPage from '../../../pages/UserRegistrationPage'

let topNavbar = new TopNavbar()
let loginPage = new LoginPage()
let userRegistrationPage = new UserRegistrationPage()

Given('\[Global] I have opened main page', () => {
    cy.visit(Cypress.config().baseUrl)

    // temporal workaround: get rid of startup popups 
    cy.get('.close-dialog > .mat-button-wrapper > span').click()
    cy.get('.cc-btn').click()
})

Given("\[Global] I have generated unique email", () => {
    Helper.createUniqueEmail()
})

Given("\[Global] I have logged with unique credentials", () => {
    Helper.createUniqueEmail()
    let username = Helper.getUniqueEmail()
    let password = Helper.getPassword()
    topNavbar.clickAccount()
    topNavbar.clickLogin()
    loginPage.clickNotYetACustomerLink()
    userRegistrationPage.fillEmail(username)
    userRegistrationPage.fillPassword(password)
    userRegistrationPage.fillRepeatPassword(password)
    userRegistrationPage.selectSecurityQuestionType("Your eldest siblings middle name?")
    userRegistrationPage.fillAnswer(username)
    userRegistrationPage.clickRegisterButton()
    loginPage.fillEmail(username)
    loginPage.fillPassword(password)
    loginPage.clickLoginButton()
})

