Cypress.Commands.add('apiCreateUniqueUser', (username, password) => {
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
                "question": "Best city",
                "createdAt": Date.now,
                "updatedAt": Date.now
            },
            "securityAnswer": "Lviv"
        }
    })
})

Cypress.Commands.add('apiLogin', (username, password) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().baseUrl}/rest/user/login`,
        failOnStatusCode: false,
        body: {
            email: username,
            password: password
        }
    }).as('userLogin').then((response) => {
            Cypress.env('token', response.body.authentication.token)
            Cypress.env('basketId', response.body.authentication.bid)
    })
})
