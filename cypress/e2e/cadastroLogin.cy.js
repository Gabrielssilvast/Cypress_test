/// <reference types="cypress" />

describe('Home Page', () =>{

  it('Cadastro de usuário',()=>{

    cy.visit('https://magento.nublue.co.uk/')
    //Realizando a busca por ID:
    cy.get('#search').should('be.visible')
    cy.get('#idr9efs5Fz').click //Clicando em Cadastrar Usuário

    cy.get('#firstname').type('Seu primeiro nome')
    cy.get('#lastname').type('Segundo nome')

    cy.get('#email_address').type('Digite seu e-mail')
    cy.get('#password').type('Digite sua senha')
    cy.get('#password_confirmation').type('Confirme sua senha')

    cy.get('#sumit').click();
    cy.get('.toast-success').should('be.visible')
    .and('.contain', 'Created Account')
    //Finalizando Cadastro e verificando se está visivel a mensagem 'Conta Criada'
  });
  

  it('Logar o Uuário',()=>{
    //Inserindo valores nos campos E-mail e Senha realizando logon
    cy.get('#email').type('Digite seu e-mail Cadastrado').click('.submit')
    cy.get('#password').type('Digite sua senha Cadastrada').click('.submit')

})
})