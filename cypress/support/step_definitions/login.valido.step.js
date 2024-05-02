import {When, Then } from "@badeball/cypress-cucumber-preprocessor";

let usuarioValido = {
    email: "camila12345@gmail.com",
    password: "123456",
    message: "Logado com sucesso.",
}

When("Passo um usuário e senha válidos", () => {
    cy.loginSignIN(usuarioValido)
})

Then("O sistema me autentica com sucesso", () => {
    cy.loginToastMessage(usuarioValido.message)
})