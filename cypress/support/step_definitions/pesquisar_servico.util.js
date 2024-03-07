import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

let usuarioValido = {
    email: "camila1234@gmail.com",
    senha: "123456",
    message: "Logado com sucesso.",
}

let searchService = {
    place: "recife"
}

Given("Estou autenticada com sucesso", () => {
    cy.loginAbrir();
    cy.loginSignIN(usuarioValido.email, usuarioValido.senha)
    cy.loginValidaMessagem(usuarioValido.message)
})

When("Quando eu realizo a pesquisa dos serviços", () => {
    cy.searchServices(searchService.place,)
})

Then("O sistema me mostra os serviços disponíveis", () => {
    cy.searchResults()

})