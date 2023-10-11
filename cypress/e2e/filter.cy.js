describe("Filter usage", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get('form').submit()
    })

    it("filter for nationalities", () => {
        cy.contains("Admin").click()
        cy.contains("Nationalities").click()

        cy.get('.oxd-table-row > [style="flex-basis: 80%;"] > div')
            .filter(":contains('Austrian')")
            .should('have.length', 1)

        cy.get('.oxd-table-row > [style="flex-basis: 80%;"] > div')
            .filter(":contains('Aus')")
            .should('have.length', 2)

        cy.get('ul.oxd-pagination__ul li').eq(1).click()

        cy.get('.oxd-table-row > [style="flex-basis: 80%;"] > div')
            .filter(":contains('Indian')")
            .should('have.length', 1)
    })
})