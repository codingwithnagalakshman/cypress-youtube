describe("custom donwload" , () => {
    beforeEach(() => {
        cy.task('deleteFolder', 'cypress/downloads/resume.txt')
        cy.login("Admin", "admin123")
    })

    it("download file", () => {
        cy.recruitment()
        cy.get("[name='firstName']")
            .clear()
            .type("Naga")
            .should('have.value', 'Naga')

        cy.get("[name='middleName']")
            .clear()
            .type("lakshman")
            .should('have.value', 'lakshman')  

        cy.get("[name='lastName']")
            .clear()
            .type("Chirukuri")
            .should('have.value', 'Chirukuri')

        cy.get('input').eq(4).clear().type("a@a.com")

        cy.get("[type='file']").selectFile({
            contents: 'cypress/fixtures/myresume.txt',
            fileName: 'myresume.txt',
            mimeType: 'text/plain',
            lastModified: Date.now()
        }, {force: true})

        // cy.get('.oxd-button--secondary').click()
        cy.get('form').submit()

        cy.get(".orangehrm-file-preview")

        // https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidateAttachment/candidateId/36

        cy.location('pathname').then( urlPath => {
            const urlInfo = urlPath.split("/");
            const candidateId = urlInfo[urlInfo.length - 1];
            cy.downloadFile('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidateAttachment/candidateId/'+candidateId, 'cypress/downloads', 'resume.txt');
            cy.readFile("cypress/downloads/resume.txt").should("contain", "This is my resume")
        })
    })
})