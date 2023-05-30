class Helper{
    static createUniqueEmail() {
        Cypress.env('uniqueEmail', `user${Date.now()}@example.com`)
    }

    static getUniqueEmail(){
        return Cypress.env('uniqueEmail')
    }

    static getPassword() {
        return Cypress.env('password')
    } 

    static getToken() {
        return Cypress.env('token')
    }

    static getBasketId() {
        return Cypress.env('basketId')
    }

    static getOperationId(){
        return Cypress.env('operationId')
    }
}

export default Helper