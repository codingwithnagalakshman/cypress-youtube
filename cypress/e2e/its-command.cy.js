describe("its command - usage", () => {
    describe("validate json data" ,() => {
        const jsonExample = {
            name: "Nagalakshman",
            age: 33,
            hobbies: ["playing cricket", "playing chess"]
        };

        it("validate data", () => {
            cy.wrap(jsonExample).its("name").should("eq", "Nagalakshman")
            cy.wrap(jsonExample.hobbies).its(0).should("eq", "playing cricket")
            cy.wrap(jsonExample.hobbies).its("length").should("eq", 2)
        })
    })

    describe("its command in web page", () => {
        beforeEach(() => {
            cy.login("Admin", "admin123")
        })

        it("validate its command", () => {
            cy.get(".oxd-main-menu-item-wrapper").its("length").should("eq", 12)
            cy.get(".oxd-main-menu-item-wrapper").should('have.length', 12)
        })
    })
})