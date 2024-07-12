Feature: Demoblaze Ecommerce Test Validation
 Application regression​
@regression @smoke​

Scenario: Validate Heading Test​
Given I open demoblaze Ecommerce website
When I click the login Button
Then I enter a valid Username
When I entered a Valid password
Then I click on sign in Button
When I Validate successful login to my account 