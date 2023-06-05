/// <reference types="cypress" />

describe('Home Page', () =>{

    it('Cadastro de usuário',()=>{

        cy.visit('https://magento.nublue.co.uk/men/tops-men/jackets-men.html')
        //Entrando na URL de compras já em Jackets MeN

        cy.get('.product-item-link').click()
        //Selecionando item pela class name
        cy.get('#product-addtocart-button').click()
        //Confirmando compra clicando em Add to Cart






    })
})
