describe('read file content', () => {
    it("read file from fixtures", () => {
        cy.readFile('cypress/fixtures/myresume.txt')
            .should('contain', 'This is my resume')

        // cy.readFile("C:\\Users\\chiru\\Downloads\\resume.txt")
        //     .should('contain', 'Hello')
    })
})