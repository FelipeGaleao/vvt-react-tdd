/* eslint-disable no-undef */
 // get env variables
const URL_APLICACAO = Cypress.env('URL_APLICACAO')

describe('Formulário de Contato', () => {
  it('Deve possuir uma div de formulário de contato', () => {
    cy.visit(URL_APLICACAO)
    cy.get('form').should('exist')
  })
})