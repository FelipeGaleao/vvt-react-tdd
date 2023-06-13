# TDD utilizando React

## Introdução
O objetivo deste projeto é criar uma aplicação web utilizando React e TDD.

## Autores
- [Maycon Felipe Mota](https://github.com/felipegaleao)
- [Eduardo Godoy](https://google.com)
- [Thiago Lutz](https://google.com)
- [Vitor Oliveira Brandão](https://google.com)

## Ferramentas

Para o desenvolvimento desse roteiro, foi utilizado as seguintes ferramentas/bibliotecas Javascript:

- [React](https://pt-br.reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
- [Mantine](https://mantine.dev/) - Biblioteca de componentes React
- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end

## Como executar?
1. Clone o repositório
2. Instale as dependências
```bash
yarn install
```

## Roteiro

### 1. Formulário de Contato

Imagine que você é desenvolvedor da MeicanSoft, uma importante empresa de Software e está necessitando criar um componente de formulário de contato. Este formulário deve conter os seguintes campos:
- Nome
- E-mail
- Mensagem
- Botão de enviar.

Anteriormente, você viu que o TDD é uma técnica de desenvolvimento de software que consiste em escrever testes antes de escrever o código. Então, vamos começar criando um teste para o formulário de contato.

#### 1.1. Criando o primeiro teste
Inicialmente, vamos criar um teste End-to-End que verifica se o formulário de contato está sendo renderizado. Para isso, vamos utilizar o Cypress.

Crie um arquivo chamado `ContactForm.spec.js` dentro da pasta `cypress/integration` e adicione o seguinte código:
```js
describe('ContactForm', () => {
  it('should render the form', () => {
    cy.visit('http://localhost:5173')
    cy.get('form').should('exist')
  })
})
```
