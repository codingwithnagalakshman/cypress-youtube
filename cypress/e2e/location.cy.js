describe("location", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("location elements verification", () => {
        cy.location().should( loc => {
            expect(loc.protocol).to.eq("https:")
            expect(loc.host).to.eq("opensource-demo.orangehrmlive.com")
            expect(loc.origin).to.eq("https://opensource-demo.orangehrmlive.com")
            expect(loc.pathname).to.eq("/web/index.php/dashboard/index")
            expect(loc.href).to.eq("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
            expect(loc.toString()).to.eq("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        })

        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.location('protocol').should('eq', 'https:')
    })
})