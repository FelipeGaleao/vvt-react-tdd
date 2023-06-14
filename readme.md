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

Crie um arquivo chamado `ContactForm.cy.js` dentro da pasta `cypress/e2e` e adicione o seguinte código:

```js
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
```

Esse código será responsável por garantir que no caso de teste `Formulário de Contato`, o formulário de contato seja renderizado e que os campos `Nome`, `E-mail`, `Mensagem` e `Botão de enviar` estejam presentes.

Ao executar o código, você verá que seus testes estão falhando, pois não há nenhum formulário de contato na página. Então, vamos criar o componente de formulário de contato.

#### 1.2. Criando o componente de formulário de contato
Agora que já temos um teste, vamos criar o componente de formulário de contato. Para isso, abra o arquivo chamado `index.jsx` dentro da pasta `src/Componentes/index.jsx` e descomente as linhas 110 a 138.
Você verá que o componente de formulário de contato já está criado, porém, ele não está sendo renderizado na página. Para renderizar o componente, abra o arquivo `App.jsx` dentro da pasta `src` e descomente a linha 22.

### 2. Adicionando novos requisitos ao formulário de contato
Agora que já temos um formulário de contato, vamos adicionar novos requisitos a ele. Ao clicar em submit, o formulário deve exibir uma mensagem de sucesso. Para isso, vamos criar um novo teste.

#### 2.1 Criando um novo teste
No arquivo `ContactForm.cy.js`, que está dentro de `cypress/e2e`, adicione o seguinte código:

```js

describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit(URL_APLICACAO)
    cy.get('input[id="txtNome"]').type('Teste Cypress')
    cy.get('input[id="txtEmail"]').type('maycon.mota@ufms.br')
    cy.get('textarea[id="txtMensagem"]').type('Teste Cypress')
  })

  it('Deve enviar os dados do formulário', () => {
    cy.get('button[id="btnEnviar"]').click()
  })

  it('Deve retornar a mensagem de sucesso', () => {
    cy.get('button[id="btnEnviar"]').click()
    cy.get('div[id="divMensagem"]').should('have.text', 'Mensagem enviada com sucesso!')
    cy.get('div[id="divMensagem"]').should('be.visible')
  }
  )
})
```

Esse código será responsável por garantir que no caso de teste `Formulário de Contato`, ao clicar no botão de enviar, o formulário envie os dados e exiba uma mensagem de sucesso.

#### 2.2. Criando o componente de mensagem
Rodando os testes, você verá que a mensagem de sucesso não está sendo exibida, ocasionando falha em um dos testes. Então, vamos adicionar a mensagem de sucesso ao formulário de contato.
Abra o arquivo `index.jsx` que está dentro de `src/Componentes/Mensagem/index.jsx` e descomente as linhas 3 a 10. Você verá que o componente de mensagem já está criado, porém, ele não está sendo renderizado na página. Para renderizar o componente, abra o arquivo `index.jsx` que está dentro de `src/Componentes/index.jsx` e descomente as linhas 7 a 9.

#### 2.3. Implementando a mensagem de sucesso e verificando de casos de teste
Em sequência, abra o arquivo `App.jsx` que está dentro de `src` e descomente as linhas 21. Agora, ao rodar os testes, você verá que os testes estão passando.