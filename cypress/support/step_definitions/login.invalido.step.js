import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let usuarioInvalido = {
    email: "camila@gmail.com",
    password: "12345",
    message: "Email ou senha inválidos.",
}

When ("Eu clico em Entrar", () => {
    cy.loginButton()
})

When("Passo um usuário e senha inválidos", () => {
    cy.loginSignIN(usuarioInvalido)
})

Then("O sistema me notifica que as credenciais não são válidas", () => {
    cy.loginToastMessage(usuarioInvalido.message)
})