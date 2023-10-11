describe("Handle checkboxes", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get('form').submit()
    })

    it("handle checkbox - scenario 1", () => {
        cy.contains("Recruitment").click()
        cy.get(".orangehrm-header-container > button").click()

        cy.get("[type='checkbox']").check({force: true})
            .should('be.checked')
    })

    it("handle checkbox - scenario 2", () => {
        cy.contains("Performance").click()
        cy.get(".oxd-topbar-body-nav-tab-item").eq(0).click()

        cy.get(".oxd-dropdown-menu").should("be.visible")
        .find("li")
        .eq(0)
        .should('have.text', 'KPIs')
        .click()

        cy.get("[type='checkbox']").check(["0", "1"], {force: true})

        cy.get('.orangehrm-horizontal-padding > div > .oxd-text')
        .should('have.text', '(2) Records Selected')

        cy.get("[type='checkbox']").check(["2", "4"], {force: true})

        cy.get('.orangehrm-horizontal-padding > div > .oxd-text')
        .should('have.text', '(4) Records Selected')

    })
})