describe("custom command", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("login with custom command", () => {
        cy.contains("Recruitment").click()
    })

    it("using Recruitment custom command", () => {
        cy.recruitment()
    })
})