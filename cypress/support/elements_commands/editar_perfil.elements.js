Cypress.Commands.add('editGetButton', () => {
    cy.wait(6000)
    cy.xpath("//li[contains(@class, 'dropdown')]") 
    //on selector: li[class~='dropdown']
        .should("be.visible")
})

Cypress.Commands.add('editGetEditarPerfil', () => {
    cy.xpath("//ul[@class = 'dropdown-menu']//a[text() = 'Editar Perfil']")
        .should('be.visible');
})

Cypress.Commands.add('editGetFullName', () => {
    cy.get('#user_fullname')
        .should("be.visible")
})

Cypress.Commands.add('editGetPhoneNumber', () => {
    cy.get('#user_phone_number')
        .should("be.visible")
})

Cypress.Commands.add('editGetDescription', () => {
    cy.get('#user_description')
        .should("be.visible")
})

Cypress.Commands.add('editGetEmail', () => {
    cy.get('#user_email')
        .should("be.visible")
})

Cypress.Commands.add('editGetPassword', () => {
    cy.get('#user_password')
        .should("be.visible")
})

Cypress.Commands.add('editGetPasswordConfirm', () => {
    cy.get('#user_password_confirmation')
        .should("be.visible")
})

Cypress.Commands.add('editGetBtnAlterar', () => {
    cy.get('input[type="submit"][value="Alterar"]')
        .should("be.visible")
})

Cypress.Commands.add("editToastMessage", () => {
    cy.get('div[class = "toast toast-info"]')
      .should("have.text", "Sua conta foi atualizada com sucesso.") 
})

/*Future study:

Cypress.Commands.add('editGetBtnRemoverConta', () => {
    cy.get('input[type="submit"][value="Remover Minha Conta"]')
        .should("be.visible")
    cy.on('window:confirm',(txt)=>{
        expect(txt).to.contains('Todos os seus dados serão perdidos. Você tem certeza que deseja remover sua conta?');
        return false;
})*/