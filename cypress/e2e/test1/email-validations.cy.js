describe("Email validations", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get('form').submit()
    })

    it("validate email input", () => {
        cy.contains("Recruitment").click()
        cy.get(".orangehrm-header-container > button").click()

        // a, a b, ab@a, ab@1 ab@a. a@a.com
        cy.wrap(["a", "a b", "ab@a", "ab@1", "ab@a."])
            .each( (ele, index, eleArr) => {
                cy.get('input').eq(4).clear().type(ele)
                cy.get('.oxd-input-field-error-message').should('have.length', 1)
                cy.get('.oxd-input-field-error-message').eq(0)
                .should('have.text', 'Expected format: admin@example.com')
            })
        
        cy.get('input').eq(4).clear().type("a@a.com")
        cy.get('.oxd-input-field-error-message').should('have.length', 0)
    })
})