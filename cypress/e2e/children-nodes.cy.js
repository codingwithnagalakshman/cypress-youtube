describe("Children nodes", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get('form').submit()
    })

    const data = ["Leave Requests to Approve", "Timesheets to Approve",
                 "Pending Self Review"];
    it("validate children nodes data", () => {
        cy.get(".orangehrm-todo-list")
            .children()
            .each((ele, index, eleArray) => {
                   cy.wrap(ele).children()
                   .last()
                   .should('contain', data[index]) 
            })
    })
})