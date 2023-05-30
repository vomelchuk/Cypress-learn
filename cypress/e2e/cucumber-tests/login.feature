Feature: Login, Registration


Scenario: Login invalid
    Given [Global] I have opened main page
      And [Top navbar] I go to Login page
     When [Login page] I fill email with "inavlid email"
      And [Login page] I fill password with "invalid"
      And [Login page] I click 'Log in' button
     Then [Login page] Error message "Invalid email or password" shoud be shown

Scenario: Registration invalid
    Given [Global] I have opened main page
      And [Top navbar] I go to Login page
      And [Login page] I click 'Not yet a customer?' link
      And [User Registration page] I fill email with "inavlid email"
      And [User Registration page] I fill password with "1"
      And [User Registration page] I repeat password with "invalid"
      And [User Registration page] I select "Your eldest siblings middle name?" security question
      And [User Registration page] I fill answer with "Rembo"
     Then [User Registration page] 'Register' button should be disabled
      And [User Registration page] error message "Email address is not valid" for email field should be shown
      And [User Registration page] error message "Password must be 5-40 characters long" for password field should be shown
      And [User Registration page] error message "Passwords do not match" for repeat password field should be shown

Scenario: Registration valid
    Given [Global] I have opened main page
      And [Global] I have generated unique email
      And [Top navbar] I go to Login page
      And [Login page] I click 'Not yet a customer?' link
      And [User Registration page] I fill email with generated unique email
      And [User Registration page] I fill password with "Passw0rd"
      And [User Registration page] I repeat password with "Passw0rd"
      And [User Registration page] I select "Your eldest siblings middle name?" security question
      And [User Registration page] I fill answer with "user1"
     Then [User Registration page] 'Register' button should be enabled
     When [User Registration page] I click 'Register' button
     Then [Login page] 'Registration completed successfully. You can now log in.' message should be shown

Scenario: Login valid
    Given [Global] I have opened main page
      And [Top navbar] I go to Login page
     When [Login page] I fill email with generated unique email
      And [Login page] I fill password with "Passw0rd"
      And [Login page] I click 'Log in' button
     Then [Main page] 'All Products' header should be shown   