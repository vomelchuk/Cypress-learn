import TopNavbarPage from "./TopNavbarPage";

class YourBasketPage extends TopNavbarPage {
    locators = {
        productsContainer: () => cy.get('mat-table')
    }

    countOfProductsShoudBeCorrect(count){
        this.locators.productsContainer().find('mat-row').should('have.length', count)
    }

    productShoudBePresent(productName){
        let isFound = false
        this.locators.productsContainer().find('mat-row mat-cell.cdk-column-product')
        .each((element) => {
            if(element.text().includes(productName)){
                isFound = true
            }
        })
        .then(() => {
            expect(isFound).to.eq(true)
        })
    }
}

export default YourBasketPage