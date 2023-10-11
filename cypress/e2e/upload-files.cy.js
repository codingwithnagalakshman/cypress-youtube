describe("upload files", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("upload files", () => {
        cy.recruitment()

        // cy.get("[type='file']").selectFile({
        //     contents: Cypress.Buffer.from('This is my resume'),
        //     fileName: 'myresume.txt',
        //     mimeType: 'text/plain',
        //     lastModified: Date.now()
        // }, {force: true})

        cy.get("[name='firstName']")
            .clear()
            .type("Naga")
            .should('have.value', 'Naga')

        cy.get("[name='middleName']")
            .clear()
            .type("lakshman")
            .should('have.value', 'lakshman')  

        cy.get("[name='lastName']")
            .clear()
            .type("Chirukuri")
            .should('have.value', 'Chirukuri')

        cy.get('input').eq(4).clear().type("a@a.com")

        cy.get("[type='file']").selectFile({
            contents: 'cypress/fixtures/myresume.txt',
            fileName: 'myresume.txt',
            mimeType: 'text/plain',
            lastModified: Date.now()
        }, {force: true})

        // cy.get('.oxd-button--secondary').click()
        cy.get('form').submit()
    })
})