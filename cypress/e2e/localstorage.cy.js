describe("local storage example", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it('verify local storage data', () => {
        cy.getAllLocalStorage().then( result => {
            cy.wrap(JSON.stringify(result))
                .should('contain', 'https://opensource-demo.orangehrmlive.com')
                .and('contain', 'core/i18n/messages')
        })

        cy.clearLocalStorage('https://opensource-demo.orangehrmlive.com')
        cy.clearAllLocalStorage()
    })
})