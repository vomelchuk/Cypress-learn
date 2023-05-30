import { When, Then } from 'cypress-cucumber-preprocessor/steps'
const MainPage = require("../../../pages/MainPage");

let mainPage = new MainPage()

When("\[MainPage] I add {string} to basket", (productName) => {
    mainPage.addProductToBasket(productName)
})

Then("\[Main page] {string} header should be shown", (text) => {
    mainPage.headerShoudBeShown(text)
})

