import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

let usuarioValido = {
    email: "camila12345@gmail.com",
    password: "123456",
    message: "Logado com sucesso.",
}

let searchService = {
    place: "Recife"
}

Given("Estou autenticada com sucesso", () => {
    cy.pageVisit()
    cy.loginButton()
    cy.loginSignIN(usuarioValido)
    cy.loginToastMessage(usuarioValido.message)
})

When("Eu realizo a pesquisa dos serviços", () => {
    cy.searchServices(searchService.place)
})

Then("O sistema me mostra os serviços disponíveis", () => {
    cy.searchResults()
})