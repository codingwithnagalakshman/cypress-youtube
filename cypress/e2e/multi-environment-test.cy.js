describe("multi environement test", () => {
    it("should open amazon website", () => {
        cy.visit("/")
        cy.get("#twotabsearchtextbox").type(Cypress.env("searchString"))
        cy.get("[value='Go']").click()
    })
})