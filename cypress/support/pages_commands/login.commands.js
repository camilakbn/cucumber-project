Cypress.Commands.add('loginButton', () => {
  cy.get("[href = '/sign_in']").should("be.visible")
      .click();
})

Cypress.Commands.add('loginEmail', (email) => {
    cy.get('#user_email').should("be.visible")
      .type(email)
})

Cypress.Commands.add('loginPassword', (password) => {
    cy.get('#user_password').should("be.visible")
      .type(password, {log:false})
})

Cypress.Commands.add('loginBtnEntrar', () => {
    cy.get('input[type="submit"][value="Entrar"]').should("be.visible")
      .click()
})

Cypress.Commands.add('loginSignIN', (loginData) => {  
  cy.loginEmail(loginData.email)
    .loginPassword(loginData.password)
    .loginBtnEntrar()
})

  /*
    Cypress.Commands.add -> cria um comando que pode ser chamado por cy.nome_do_comando
    o primeiro parâmetro (que vai ficar entre '' ou "" será o nome_do_comando )
    no exemplo acima chamamos por cy.loginSingIN
    entretanto o () ou (nome_do(s)_parametro(s)) serão os parâmetros que seu método quer receber.
    então: cy.loginSingIN(loginData) irá atribuir o valor que você passar por parâmetro quando chamá-lo:
      cy.loginSignIN() > loginData = undefined -> você não passou nada para ele
      cy.loginSignIN("www.abcde.com") -> recebeu o valor string que você indicou entre parênteses
      cy.loginSingIN(registro) -> onde registro:{...} -> recebeu o set de dados chamado de registros.
  */

Cypress.Commands.add("loginToastMessage", (message) => {
    cy.get("#toast-container .toast .toast-message ").should("be.visible").should("have.text", message)
})