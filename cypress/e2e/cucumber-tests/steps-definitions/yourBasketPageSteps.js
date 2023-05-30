import { Then } from 'cypress-cucumber-preprocessor/steps'
import YourBasketPage from '../../../pages/YuorBasketPage'

let yourBasketPage =  new YourBasketPage()

Then("\[Your Basket page] {int} products should be present in the basket", (count) =>{
    yourBasketPage.countOfProductsShoudBeCorrect(count)
})

Then("\[Your Basket page] {string} should be present in the basket", (name) =>{
    yourBasketPage.productShoudBePresent(name)
})