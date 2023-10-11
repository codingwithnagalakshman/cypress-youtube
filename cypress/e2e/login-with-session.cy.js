describe("login with session", () => {
    beforeEach(() => {
        cy.loginWithSession("Admin", "admin123")
        cy.visit("/web/index.php/dashboard/index")
    })

    it("test case1 ", () => {
        cy.log("test case 1")
    })

    it("test case2 ", () => {
        cy.log("test case 2")
    })

    it("test case3 ", () => {
        cy.log("test case 3")
    })

    it("test case4 ", () => {
        cy.log("test case 4")
    })

    it("test case5 ", () => {
        cy.log("test case 5")
    })
})