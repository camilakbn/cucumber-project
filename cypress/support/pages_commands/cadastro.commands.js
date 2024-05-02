Cypress.Commands.add('pageVisit', () => {
    cy.visit("");
})

Cypress.Commands.add('registerButton', () => {
    cy.get("[href = '/sign_up']").should("be.visible")
        .click();
})

Cypress.Commands.add('registerFullName', (registerName) => {
    cy.get('#user_fullname').should("be.visible")
        .type(registerName)
        .should("have.value", registerName)
})

Cypress.Commands.add('registerNewEmail', (registerEmail) => {
    cy.get('#user_email').should("be.visible")
        .type(registerEmail)
        .should("have.value", registerEmail)
})

Cypress.Commands.add('registerNewPassword', (registerPassword) => {
    cy.get('#user_password').should("be.visible")
        .type(registerPassword)
        .should("have.value", registerPassword)
})

Cypress.Commands.add('registerNewPasswordConfirm', (registerPasswordConfirm) => {
    cy.get('#user_password_confirmation').should("be.visible")
        .type(registerPasswordConfirm)
        .should("have.value", registerPasswordConfirm)
})

Cypress.Commands.add('registerBtnCadastrar', () => {
    cy.get('input[type="submit"][value="Cadastrar"]').should("be.visible")
        .click()
})

Cypress.Commands.add('registerSteps', (registerData) => {
    cy.registerFullName(registerData.registerName)
      .registerNewEmail(registerData.registerEmail)
      .registerNewPassword(registerData.registerPassword)
      .registerNewPasswordConfirm(registerData.registerPasswordConfirm)
      .registerBtnCadastrar()
})

Cypress.Commands.add("registerToastMessage", (registerMessage) => {
    cy.get("#toast-container .toast .toast-message ").should("be.visible")
        .should("have.text", registerMessage)
})