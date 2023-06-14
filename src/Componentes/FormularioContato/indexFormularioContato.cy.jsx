import { describe } from 'mocha'
import { FormularioContato } from './index'

describe('<FormularioContato />', () => {

  beforeEach(() => {
    cy.mount(<FormularioContato />)
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
