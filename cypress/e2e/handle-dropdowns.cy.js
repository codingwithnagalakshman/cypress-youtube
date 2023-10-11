describe("Handle dropdowns", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get('form').submit()
    })

    it("select dropdwon value", () => {
        cy.contains("Recruitment").click()
        cy.get(".orangehrm-header-container > button").click()

        cy.get(".oxd-select-text").click()

        cy.get(".oxd-select-dropdown").should('be.visible')
            .contains('Senior QA Lead')
            .click()
            cy.get(".oxd-select-text-input").should('contain', 'Senior QA Lead')  
            
        // cy.get('select').select(0)
        // cy.get('select').select('Senior QA Lead')
        // cy.get('select').select('senior_qa_lead')
        // cy.get('select').select([0, 1])
    })
})