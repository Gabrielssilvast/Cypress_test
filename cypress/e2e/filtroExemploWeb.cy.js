/// <reference types="cypress" />

describe('Home Page Desktop', () => {
  beforeEach(() => cy.visit('https://app.skeel.com.br/publico/vagas'))

  it('checking information List Options Categoria: Comercial e Vendas', () => {
    // Verificando se o elemento está visível na página
    cy.get('.btn-new-vacancie').should('be.visible')
    cy.get('.buttons > .btn').should('be.visible').click()

    // Verificando se o elemento contém o texto
    cy.contains('button', 'Busca Avançada').click({ force: true })
    cy.wait(3500)

    // Abrir a lista
    cy.get('#category-select > .cuppa-dropdown > .selected-list > .c-btn').click({ force: true })
    cy.get('.scrollable-content > :nth-child(1)').click({ force: true }) // btn selecionar Comercial e Vendas
    cy.wait(3500)

    // Subcategoria: abrir lista
    cy.get('#subcategory-select > .cuppa-dropdown > .selected-list > .c-btn').click({ force: true })
    // Clicar em uma opção de Subcategoria
    cy.get('#subcategory-select > .cuppa-dropdown > .dropdown-list > .list-area > [style="overflow: auto; max-height: 300px;"] > .lazyContainer > .scrollable-content > .pure-checkbox').click({ force: true })
    
    // btn Buscar
    cy.get('.container-button-search > .v-orange-button').click({ force: true })
    //cy.screenshot('/Users/Desktop/Cypress_sc/screenshots');

    // Limpando a pesquisa
    cy.wait(3500)
    cy.contains('button', 'Busca Avançada').click({ force: true })
    cy.get('.transparent-button').click({ force: true }) // btn clear all
    //cy.screenshot('/Users/Desktop/Cypress_sc/screenshots');

    //Esse Código pode ser repetido para cada uma das opções e ser verificado os elementos em tela bem como ScreenShots em cada etapa.

})
})





