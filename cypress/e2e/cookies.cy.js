describe("explore cookies", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("verify cookies", () => {
        cy.getAllCookies()
            .should('have.length', 1)
            .then( (cookies) => {
                expect(cookies[0]).to.have.property('name', 'orangehrm')
            })

        cy.getCookie('orangehrm').should('exist')
            .and('have.property', 'name', 'orangehrm')


        cy.getCookies().should('have.length', 1)
            .then( (cookies) => {
                expect(cookies[0]).to.have.property('name', 'orangehrm')
            })

        cy.clearCookie('orangehrm')
        cy.getCookies().should('have.length', 0)

    })
})