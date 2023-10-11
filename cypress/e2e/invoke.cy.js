describe("invoke usage", () => {
    describe("validate javascript function", () => {
        const sum = (value1, value2) => {
            return value1 + value2;
        }
        it("validate sum", () => {
            cy.wrap({sum}).invoke('sum', 10, 20)
                .should('eq', 30)
        })
    })

    describe("validate web elements", () => {
        beforeEach(() => {
            cy.login("Admin", "admin123")
        })

        it("validate logo png", () => {
            cy.get(".oxd-brand-banner").children()
                .invoke("attr", "src")
                .should("contain", "orangehrm-logo.png")

            cy.get(".oxd-brand-banner").children()
                .should('have.attr', 'src', '/web/images/orangehrm-logo.png?v=1689053487449')
        })
    })
})