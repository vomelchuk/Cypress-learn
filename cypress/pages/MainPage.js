import TopNavbar from "./TopNavbarPage";

class MainPage extends TopNavbar {
    locators = {
        heading: () => cy.get(".heading div:nth-of-type(1)"),
        productContainer: () => cy.get(".mat-grid-list div mat-grid-tile")
    }

    headerShoudBeShown(text){
        this.locators.heading().should('be.visible').and('contain', text)
    }

    addProductToBasket(productName){
        this.locators.productContainer().each((element) => {
            if(element.find('.item-name').text().includes(productName)){
                cy.wrap(element).find('button').click()
            }
        })
    }
}

export default MainPage