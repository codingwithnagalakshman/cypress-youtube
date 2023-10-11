import data from '../fixtures/example.json';

describe("fixtures", () => {
    it("read fixtures data", () => {
        cy.fixture("example.json").as("exampledata")
        cy.get("@exampledata").then((resData) => {
            cy.wrap(resData).its("email").should('eq', 'hello@cypress.io')
        })
    })

    it("read fixtures data using this keyword", function() {
        cy.fixture("example.json").as("exampledata")
        cy.wrap().then(() => {
            cy.log(this.exampledata.body);
        })
    })

    it("login to application by reading username and password from fixture", () => {
        cy.login(data.user.username, data.user.password)
        cy.contains("Recruitment").click()
    })
})