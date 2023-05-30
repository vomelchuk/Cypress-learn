Feature: Basket


Scenario: Add products to basket
    Given [Global] I have opened main page
      And [Global] I have logged with unique credentials
     When [MainPage] I add "Apple Juice (1000ml)" to basket
      And [MainPage] I add "Apple Pomace" to basket
     Then [Top navbar] 'Your Basket' button should shown 2 products
     When [Top navbar] I click 'Your Basket' button
     Then [Your Basket page] 2 products should be present in the basket
      And [Your Basket page] "Apple Juice (1000ml)" should be present in the basket
      And [Your Basket page] "Apple Pomace" should be present in the basket