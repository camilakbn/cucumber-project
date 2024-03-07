Cypress.Commands.add('searchTypePlace', (place) => {
    cy.searchGetPlace()
      .type(place)
})

Cypress.Commands.add('searchPutStartDate', (startDate) => {
    cy.searchGetStartDate()
      .click()
      cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
      .click();
})

Cypress.Commands.add('searchPutEndDate', (endDate) => {
    cy.searchGetEndDate()
      .click()
      cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
      .click();
})

Cypress.Commands.add('searchClickPesquisar', () => {
    cy.searchGetBtnPesquisar()
      .click()
})

Cypress.Commands.add('searchServices', (place) => {
    cy.searchTypePlace(place)
      .searchPutStartDate()
      .searchPutEndDate()
      .searchClickPesquisar()
})


Cypress.Commands.add("searchResults", (service) => {
   cy.searchGetResults()
})