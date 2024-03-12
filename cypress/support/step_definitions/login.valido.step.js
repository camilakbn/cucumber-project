import {When, Then } from "@badeball/cypress-cucumber-preprocessor";

let usuarioValido = {
    email: "camila12345@gmail.com",
    senha: "123456",
    message: "Logado com sucesso.",
}

// Given("Estou tentando realizar login no sistema", () => {

When("Passo um usuario valido", () => {
    cy.loginSignIN(usuarioValido.email, usuarioValido.senha)
})

Then("O sistema me autentica com sucesso", () => {
    cy.loginValidaMessagem(usuarioValido.message)
})