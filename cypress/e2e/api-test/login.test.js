import Helpers from '../../helpers/helper'

describe('API - user test', () =>{

    Helpers.createUniqueEmail()
    let username = Helpers.getUniqueEmail()
    let password = Helpers.getPassword()

    it('Login invalid', () =>{
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/rest/user/login`,
            failOnStatusCode: false,
            body: {
                email: "invalid user",
                password: "Passw0rd"
            }
        }).as('userLogin')

        cy.get('@userLogin').its('status').should('eq', 401)
        cy.get('@userLogin').its('body').should('include', 'Invalid email or password')
    })

    it('Create user', () => {
        cy.log(Helpers.getUniqueEmail())

        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/api/Users/`,
            failOnStatusCode: false,
            body: {
                "email": username,
                "password": password,
                "passwordRepeat": password,
                "securityQuestion": {
                    "id": 4,
                    "question": "Father's birth date? (MM/DD/YY)",
                    "createdAt": Date.now,
                    "updatedAt": Date.now
                },
                "securityAnswer": "api test in here"
            }
        }).as('userLogin')

        cy.get('@userLogin').its('status').should('eq', 201)
    })

    it('Create user with the same username', () => {
        cy.log(Helpers.getUniqueEmail())

        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/api/Users/`,
            failOnStatusCode: false,
            body: {
                "email": username,
                "password": password,
                "passwordRepeat": password,
                "securityQuestion": {
                    "id": 4,
                    "question": "Father's birth date? (MM/DD/YY)",
                    "createdAt": Date.now,
                    "updatedAt": Date.now
                },
                "securityAnswer": "api test in here"
            }
        }).as('newUser')

        cy.get('@newUser').its('status').should('eq', 400)
        cy.get('@newUser').its('body').should('deep.contain', {"errors":[{"field": "email", "message": "email must be unique"}]})
    })

    it('Login with created user', () =>{
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/rest/user/login`,
            failOnStatusCode: false,
            body: {
                email: username,
                password: password
            }
        }).as('userLogin')

        cy.get('@userLogin').its('status').should('eq', 200)
    })
})