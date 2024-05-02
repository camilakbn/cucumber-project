Cypress.Commands.add('editButton', () => {
  cy.get("#toast-container .toast .toast-message ").should("be.visible").should("have.text", "Logado com sucesso.")
    .click()
      cy.xpath("//li[contains(@class, 'dropdown')]").should("be.visible")
        .click()
    //on selector: li[class~='dropdown']
})

Cypress.Commands.add('editEditarPerfil', () => {
  cy.xpath("//ul[@class = 'dropdown-menu']//a[text() = 'Editar Perfil']").should('be.visible')
      .click()
})

Cypress.Commands.add('editFullName', (fullName) => {
  cy.get('#user_fullname').should("be.visible")
      .clear(fullName)
      .type(fullName)
      .should("have.value", fullName)
})

Cypress.Commands.add('editPhoneNumber', (phoneNumber) => {
  cy.get('#user_phone_number').should("be.visible")
      .clear(phoneNumber)
      .type(phoneNumber)
      .should("have.value", phoneNumber)
})

Cypress.Commands.add('editDescription', (description) => {
  cy.get('#user_description').should("be.visible")
      .clear(description)
      .type(description)
      .should("have.value", description)
})

Cypress.Commands.add('editEmail', (email) => {
  cy.get('#user_email').should("be.visible")
      .clear(email)
      .type(email)
      .should("have.value", email)
})

Cypress.Commands.add('editPassword', (password) => {
  cy.get('#user_password').should("be.visible")
      .type(password)
      .should("have.value", password)
})

Cypress.Commands.add('editPasswordConfirm', (passwordConfirm) => {
  cy.get('#user_password_confirmation').should("be.visible")
      .type(passwordConfirm)
      .should("have.value", passwordConfirm)
})

Cypress.Commands.add('editBtnAlterar', () => {
  cy.get('input[type="submit"][value="Alterar"]').should("be.visible")
      .click()
})

Cypress.Commands.add('editRequiredFields', (requiredFields) => {
  cy.editFullName(requiredFields.fullName)
    .editPhoneNumber(requiredFields.phoneNumber)
    .editDescription(requiredFields.description)
    .editEmail(requiredFields.editEmail)
    .editPassword(requiredFields.editPassword)
    .editPasswordConfirm(requiredFields.passwordConfirm)
    .editBtnAlterar()
})

Cypress.Commands.add("editToastMessage", (editMessage) => {
  cy.get('div[class = "toast toast-info"]').should("have.text", "Sua conta foi atualizada com sucesso.", editMessage) 
})

/*Future study:

Cypress.Commands.add('editGetBtnRemoverConta', () => {
  cy.get('input[type="submit"][value="Remover Minha Conta"]')
      .should("be.visible")
  cy.on('window:confirm',(txt)=>{
      expect(txt).to.contains('Todos os seus dados serão perdidos. Você tem certeza que deseja remover sua conta?');
      return false;
})*/