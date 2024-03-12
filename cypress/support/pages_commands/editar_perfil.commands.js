Cypress.Commands.add('clickEditButton', (edit) => {
    cy.editGetButton()
      .click()
})

Cypress.Commands.add('clickEditarPerfil', (editarPerfil) => {
    cy.editGetEditarPerfil()
      .click()
})

Cypress.Commands.add('clickEditFullName', (fullName) => {
  cy.editGetFullName()
    .clear(fullName)
    .type(fullName)
})

Cypress.Commands.add('clickEditPhoneNumber', (phoneNumber) => {
  cy.editGetPhoneNumber()
    .clear(phoneNumber)
    .type(phoneNumber)
})

Cypress.Commands.add('clickEditDescription', (description) => {
  cy.editGetDescription()
    .clear(description)
    .type(description)
})

Cypress.Commands.add('clickEditEmail', (editEmail) => {
  cy.editGetEmail()
    .clear(editEmail)
    .type(editEmail)
})

Cypress.Commands.add('clickEditPassword', (editPassword) => {
  cy.editGetPassword()
    .type(editPassword)
})

Cypress.Commands.add('clickEditPasswordConfirm', (passwordConfirm) => {
  cy.editGetPasswordConfirm()
    .type(passwordConfirm)
})

Cypress.Commands.add('clickBtnAlterar', () => {
  cy.editGetBtnAlterar()
    .click()
})

Cypress.Commands.add('clickEditPerfil', (fullName, phoneNumber, description, editEmail, editPassword, passwordConfirm) => {
  cy.clickEditFullName(fullName)
    .clickEditPhoneNumber(phoneNumber)
    .clickEditDescription(description)
    .clickEditEmail(editEmail)
    .clickEditPassword(editPassword)
    .clickEditPasswordConfirm(passwordConfirm)
    .clickBtnAlterar()
})

Cypress.Commands.add("editValidaMessagem", (mensagem) => {
  cy.editToastMessage()
    .should("have.text", mensagem)
})