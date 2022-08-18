// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('fillFieldAndSubmit', function(){

    cy.get('#firstName').type('Charlles')
    cy.get('#lastName').type('Santana')
    cy.get('#email').type('charlles@gmail.com')
    cy.get('#open-text-area').type('Texto qualquer digitado')
    //cy.get('.button[type="submit"]').click
    cy.contains('button', 'Enviar').click 
})


Cypress.Commands.add('fillFieldAndSubmitParam', function(nome, sobrenome, email, texto){

    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(texto)
    //Exemplo de uso do comando Contains, que faz a mesma coisa que no exemplo de cima  
    cy.contains('button', 'Enviar').click 
})

Cypress.Commands.add('login', function(){

    cy.visit('https://sisw-dev.gertec.com.br')

    cy.get('.mat-select-arrow').click()
    cy.get('#mat-option-3 > .mat-option-text').click()
    cy.get('#mat-input-0').type('charlles')
    cy.get('#mat-input-1').type('Acesso@001')
    cy.get('.mat-button-wrapper').click()
})

Cypress.Commands.add('montagem', function(num_serial){

    cy.visit('https://sisw-dev.gertec.com.br/assembly-product')
    cy.get('#mat-input-0').type(num_serial)
})