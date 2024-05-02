import {When, Then} from "@badeball/cypress-cucumber-preprocessor";

let editPerfil = {
    fullName: "Camila Nascimento",
    phoneNumber: "999990000",
    description: "Hello hello",
    editEmail: "camila12345@gmail.com",
    editPassword: "123456",
    passwordConfirm: "123456",
    message: "Sua conta foi atualizada com sucesso."
}

When("Eu clico para editar o perfil e edito as informações do meu perfil", () => {
    cy.editButton()
    cy.editEditarPerfil()
    cy.editRequiredFields(editPerfil)
})

Then("O sistema salva as alterações com sucesso", () => {
    cy.editToastMessage(editPerfil.message)
})