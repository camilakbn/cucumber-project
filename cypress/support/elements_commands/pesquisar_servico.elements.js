Cypress.Commands.add('searchGetPlace', () => {
    cy.get('#search')
        .should("be.visible")
})

Cypress.Commands.add('searchGetStartDate', () => {
    cy.get('#start_date').should('be.visible');
})

Cypress.Commands.add('searchGetEndDate', () => {
    cy.get('#end_date')
        .should("be.visible")
})

Cypress.Commands.add('searchGetBtnPesquisar', () => {
    cy.get('input[type="submit"][value="Pesquisar"]')
        .should("be.visible")
})

Cypress.Commands.add('searchGetResults', () => {
    cy.get("[id='filter']")
        .should("be.visible")
})