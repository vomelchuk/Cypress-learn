import TopNavbarPage from "./TopNavbarPage";

class LoginPage extends TopNavbarPage {
    locators = {
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#loginButton'),
        remeberMeCheckbox: () => cy.get('#rememberMe-input'),
        notYetCustomerLink: () => cy.get('#newCustomerLink > .primary-link'),
        errorMessage: () => cy.get('.error')
    }

    fillEmail(email){
        this.locators.emailInput().type(email)
    }

    fillPassword(password){
        this.locators.passwordInput().type(password)
    }

    clickLoginButton() {
        this.locators.loginButton().click()
    } 

    checkRememberMe(){
        this.locators.remeberMeCheckbox().check()
    }

    clickNotYetACustomerLink(){
        this.locators.notYetCustomerLink().click({force: true})
    }

    errorMessageIsShown(message){
        this.locators.errorMessage().should('contain.text',message)
    }

    successMessageIsShown(message){
        cy.contains(message).should('be.visible')
    }
}

export default LoginPage