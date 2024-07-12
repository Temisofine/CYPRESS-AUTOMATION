/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})

Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click the login Button', function(){
    cy.get('#login2').click()
})

Then ('I enter a valid Username', function(){
   cy.get('#loginusername').type(this.data.username);
})

When ('I entered a Valid password', function(){
    cy.get('#loginpassword').type(this.data.password);
})
Then ('I click on sign in Button', function(){
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
})

When ('I Validate successful to my account', function(){
    //cy.contains('Welcome Temisofine').should('be.visible');
    cy.get('#nameofuser').should('exist')
})
// Scenario: Verify unsuccessful login with blank username and blank password
 Given ('I visit Demoblaze Ecommerce Website', function(){
    cy.visit('https://demoblaze.com/');
 })
 When ('I click the Login Button', function(){
    cy.wait(2000)
    cy.get('#login2').click()
 })
 Then
 