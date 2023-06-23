/// <reference types="cypress" />

describe('Home Page Desktop', () => {
    beforeEach(() => cy.visit('https://app.skeel.com.br/publico/vagas'))
  
    it('View Mode', () => {

        cy.get('.btn-new-vacancie').should('be.visible')
        cy.get('.buttons > .btn').should('be.visible').click()

        cy.get('.svg-inline--fa fa-th-list fa-w-16 fa-2x vacancie-list-view-button active-list-view').click()
        cy.screenshot('/Users/Desktop/Cypress_sc/ViewMode1');

        cy.get('.svg-inline--fa fa-th fa-w-16 fa-2x vacancie-grid-view-button').click({ force: true })
        cy.screenshot('/Users/Desktop/Cypress_sc/ViewMode2')
})
})