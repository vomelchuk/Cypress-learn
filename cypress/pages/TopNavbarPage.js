import BasePage from "./BasePage"

export default class TopNavbarPage extends BasePage {
    locators = {
        accountButton: () => cy.get('#navbarAccount'),
        searchButton: () => cy.get('#searchQuery'),
        loginItem: () => cy.get('#navbarLoginButton'),
        productsCount: () => cy.xpath(`//button[@aria-label='Show the shopping cart']//span[contains(@class,'warn-notification')]`),
        yourBasketButton: () => cy.xpath(`//button[@aria-label='Show the shopping cart']`)
    }

    clickAccount(){
        this.locators.accountButton().click()
    }

    clickSeach(){
        this.locators.searchButton().click()
    }

    clickLogin(){
        this.locators.loginItem().click()
    }

    clickYourBasketButton(){
        this.locators.yourBasketButton().click()
    }

    productCountsShouldBeCorrect(count){
       this.locators.productsCount().should('contain', count)
    }
}