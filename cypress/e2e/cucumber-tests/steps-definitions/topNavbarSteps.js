import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import TopNavbar from '../../../pages/TopNavbarPage'

let topNavbar = new TopNavbar()

When('\[Top navbar] I go to Login page', () => {
    topNavbar.clickAccount()
    topNavbar.clickLogin()
})

When("\[Top navbar] I click 'Your Basket' button", () =>{
    topNavbar.clickYourBasketButton()
})

Then("\[Top navbar] 'Your Basket' button should shown {int} products", (count) => {
    topNavbar.productCountsShouldBeCorrect(count)
})