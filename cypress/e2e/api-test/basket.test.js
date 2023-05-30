import Helpers from '../../helpers/helper'

describe('API - basket test', () => {

    Helpers.createUniqueEmail()
    let username = Helpers.getUniqueEmail()
    let password = Helpers.getPassword()

    before(() => {
        cy.apiCreateUniqueUser(username, password)
        cy.apiLogin(username, password)
    })

    it('Add product to basket', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/api/BasketItems/`,
            failOnStatusCode: false,
            body: { 
                ProductId: 1, 
                BasketId: Helpers.getBasketId().toString(), 
                quantity: 1
            },
            headers: {
                "Authorization": 'Bearer ' + Helpers.getToken() 
              }
        }).as('AddTobBasket')

        cy.get('@AddTobBasket').then((response) => {
            Cypress.env('operationId', response.body.data.id)
        })

        cy.get('@AddTobBasket').its('status').should('eq', 200)
        cy.get('@AddTobBasket').its('body').should('have.property', 'status', 'success')
    })

    it('Get not empty basket status', () => {
        cy.request({
            method: 'Get',
            url: `${Cypress.config().baseUrl}/rest/basket/${Helpers.getBasketId()}`,
            failOnStatusCode: false,
            headers: {
                "Authorization": 'Bearer ' + Helpers.getToken() 
              }
        }).as('GetBasket')

        cy.get('@GetBasket').its('status').should('eq', 200)
        cy.get('@GetBasket').its('body').should('have.property', 'status', 'success')
        cy.get('@GetBasket').then((response) => {
            expect(response.body.data.Products.length > 0).to.eq(true)
        })
    })

    it('Remove product from basket', () => {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.config().baseUrl}/api/BasketItems/${Helpers.getOperationId()}`,
            failOnStatusCode: false,
            headers: {
                "Authorization": 'Bearer ' + Helpers.getToken() 
              }
        }).as('RemoveFrombBasket')

        cy.get('@RemoveFrombBasket').its('status').should('eq', 200)
        cy.get('@RemoveFrombBasket').its('body').should('have.property', 'status', 'success')
    })

    it('Get empty basket status', () => {
        cy.request({
            method: 'Get',
            url: `${Cypress.config().baseUrl}/rest/basket/${Helpers.getBasketId()}`,
            failOnStatusCode: false,
            headers: {
                "Authorization": 'Bearer ' + Helpers.getToken() 
              }
        }).as('GetBasket')

        cy.get('@GetBasket').its('status').should('eq', 200)
        cy.get('@GetBasket').its('body').should('have.property', 'status', 'success')
        cy.get('@GetBasket').then((response) => {
            expect(response.body.data.Products.length == 0).to.eq(true)
        })
    })
})