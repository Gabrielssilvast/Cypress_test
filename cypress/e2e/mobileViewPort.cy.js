/// <reference types="cypress" />

describe('Home Page Desktop', () => {
    beforeEach(() => {
      cy.visit('https://app.skeel.com.br/publico/vagas');
      cy.viewport('iphone-x'); // Definindo a View Port para o iPhone X, podendo ser outros aparelhos.
    });
  
    it('ViewPort Mobile: Iphone X', () => {
        // Verificando os elementos na documentação de ScreenShots
        //cy.screenshot('/Users/Desktop/Cypress_sc/screenshots');

        cy.get('.buttons > .btn').should('be.visible').click()
        //cy.get('.navbar > a > #logo').should('be.visible')
        cy.get('.form-group > .form-control').should('be.visible')


        cy.get('.advanced-search-btn-icon > .svg-inline--fa').click({ force: true })
        // Select type: ON View model Mobile

        cy.wait(3500)
        cy.get(':nth-child(8) > .btn-group > .btn > .filter-option').click({ force: true }) // Tipo de contrato
        cy.get('.show > .dropdown-menu > [data-original-index="1"] > a').click({ force: true })

        cy.wait(3500)
        cy.get('.container-button-search > .v-orange-button').click({ force: true }) // btn buscar

        // Clear
        cy.wait(3500)
        cy.contains('button', 'Busca Avançada').click({ force: true })
        cy.get('.transparent-button').click({ force: true }) // btn clear all
        //cy.screenshot('/Users/Desktop/Cypress_sc/screenshots')

    })
  });
  