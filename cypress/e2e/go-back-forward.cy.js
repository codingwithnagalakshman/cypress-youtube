describe("Navigate back and forward", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("Go backward", () => {
        cy.contains("Recruitment").click()
        cy.url().should('contain', "/web/index.php/recruitment/viewCandidates")
        cy.go('back')
        cy.url().should('contain', '/web/index.php/dashboard/index')
    })

    it('Go backward with number', () => {
        cy.contains("Recruitment").click()
        cy.url().should('contain', "/web/index.php/recruitment/viewCandidates")
        cy.go(-1)
        cy.url().should('contain', '/web/index.php/dashboard/index')
    })

    it("Go forward", () => {
        cy.contains("Recruitment").click()
        cy.url().should('contain', "/web/index.php/recruitment/viewCandidates")
        cy.go('back')
        cy.go('forward')
        cy.url().should('contain', "/web/index.php/recruitment/viewCandidates")
    })

    it("Go forward with number", () => {
        cy.contains("Recruitment").click()
        cy.url().should('contain', "/web/index.php/recruitment/viewCandidates")
        cy.go(-1)
        cy.go(1)
        cy.url().should('contain', "/web/index.php/recruitment/viewCandidates")
    })
})