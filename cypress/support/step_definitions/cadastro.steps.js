import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

let register = {
    registerName: "Camila Nascimento",
    registerEmail: `Camila_Nascimento_${faker.internet.email()}`,
    registerPassword: "123456",
    registerPasswordConfirm: "123456",
    registerMessage: "Bem-vindo! Você se registrou com sucesso.",
}

Given ("Eu entro no publicazo", () => {
    cy.pageVisit();
})

When ('Clico em Cadastre-se', () => {
    cy.registerButton();
})

When ("Preencho as minhas informações", () => {
    cy.registerSteps(register)
})

Then ("O sistema exibe uma mensagem de sucesso", () => {
    cy.registerToastMessage(register.registerMessage)
})