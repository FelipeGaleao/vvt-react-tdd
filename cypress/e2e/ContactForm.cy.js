/* eslint-disable no-undef */
// get env variables
const URL_APLICACAO = Cypress.env('URL_APLICACAO')

// verificar se o formulário de contato possui as características do requisito definido

describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit(URL_APLICACAO)
  })

  it('Deve possuir uma div de formulário de contato', () => {
    cy.get('form').should('exist')
  })

  it('Deve possuir um campo de nome', () => {
    cy.get('input[id="txtNome"]').should('exist')
  })

  it('Deve possuir um campo de email', () => {
    cy.get('input[id="txtEmail"]').should('exist')
  })

  it('Deve possuir um campo de mensagem', () => {
    cy.get('textarea[id="txtMensagem"]').should('exist')
  })
  
  it('Deve possuir um botão de enviar', () => {
    cy.get('button[id="btnEnviar"]').should('exist')
  }) 
})

// verificar se o formulário está enviando os dados corretamente e se está retornando a mensagem de sucesso

describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit(URL_APLICACAO)
  })

  it('Deve enviar os dados do formulário', () => {
    cy.get('input[id="txtNome"]').type('Teste Cypress')
    cy.get('input[id="txtEmail"]').type('maycon.mota@ufms.br')
    cy.get('textarea[id="txtMensagem"]').type('Teste Cypress')
    cy.get('button[id="btnEnviar"]').click()
  })

  it('Deve retornar a mensagem de sucesso', () => {
    cy.get('div[id="divMensagem"]').should('have.text', 'Mensagem enviada com sucesso!')
    cy.get('div[id="divMensagem"]').should('be.visible')
  }
  )
})