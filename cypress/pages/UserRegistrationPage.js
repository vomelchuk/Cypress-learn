import TopNavbarPage from "./TopNavbarPage";

class UserRegistrationPage extends TopNavbarPage {
    locators ={
        emeailInput: () => cy.get('#emailControl'),
        passwordInput:  () =>  cy.get('#passwordControl'),
        repeatPasswordInput:  () =>  cy.get('#repeatPasswordControl'),
        securityQuestionDropdownrd:  () =>  cy.get('.mat-select-trigger'),
        securityQuestionChoise:  () =>  cy.get('.mat-select-panel'),
        securityAnswerInput:  () =>  cy.get('#securityAnswerControl'),
        registerButton:  () =>  cy.get('#registerButton'),
        emailErrorMessage:  () =>  cy.xpath(`//input[@id='emailControl']/../../../..//*[contains(@class, 'mat-error')]`),
        passwordErrorMessage:  () =>  cy.xpath(`//input[@id='passwordControl']/../../../..//*[contains(@class, 'mat-error')]`),
        repeatPasswordErrorMessage:  () =>  cy.xpath(`//input[@id='repeatPasswordControl']/../../../..//*[contains(@class, 'mat-error')]`)
    }

    fillEmail(email){
        this.locators.emeailInput().type(email)
    }

    fillPassword(password){
        this.locators.passwordInput().type(password)
    }

    fillRepeatPassword(password){
        this.locators.repeatPasswordInput().type(password)
    }

    selectSecurityQuestionType(type){
        this.locators.securityQuestionDropdownrd().click()
        this.locators.securityQuestionChoise().find('mat-option').each((element) => {
            if(element.text().includes(type)){
                cy.wrap(element).click()
            }
        })
    }

    fillAnswer(answer){
        this.locators.securityAnswerInput().type(answer)
    }

    clickRegisterButton(){
        this.locators.registerButton().click()
    }

    registerButtonIsDisabled(){
        this.locators.registerButton().should('be.disabled')
    }

    registerButtonIsEnabled(){
        this.locators.registerButton().should('be.enabled')
    }

    emailErrorMessageShouldBeShown(error) {
        this.locators.emailErrorMessage().should('be.visible').and('contain', error)
    }

    passwordErrorMessageShouldBeShown(error) {
        this.locators.passwordErrorMessage().should('be.visible').and('contain', error)
    }

    repeatPaswordErrorMessageShouldBeShown(error) {
        this.locators.repeatPasswordErrorMessage().should('be.visible').and('contain', error)
    }
}

export default UserRegistrationPage