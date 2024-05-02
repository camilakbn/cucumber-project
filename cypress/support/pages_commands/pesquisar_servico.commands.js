Cypress.Commands.add('searchPlace', (place) => {
  cy.get('#search').should("be.visible")
      .type(place)
})

Cypress.Commands.add('searchStartDate', () => {
  cy.get('#start_date').should('be.visible')
      .click()
      cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
      .click()
})

Cypress.Commands.add('searchEndDate', () => {
  cy.get('#end_date').should("be.visible")
      .click()
      cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
      .click()
})

Cypress.Commands.add('searchBtnPesquisar', () => {
  cy.get('input[type="submit"][value="Pesquisar"]').should("be.visible")
      .click()
})

Cypress.Commands.add('searchServices', (place) => {
  cy.searchPlace(place)
    .searchStartDate()
    .searchEndDate()
    .searchBtnPesquisar()
})

Cypress.Commands.add('searchResults', () => {
  cy.get("[id='filter']")
      .should("be.visible")
})