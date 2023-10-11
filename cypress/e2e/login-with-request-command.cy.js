describe("login with request command", () => {
    it("login with request command", () => {
        cy.visit("/web/index.php/auth/login")
        cy.get("[type='hidden']").invoke("attr", "value").as("token");
        cy.get("@token").then((token) => {
            cy.request({
                method: 'POST',
                url: '/web/index.php/auth/validate',
                form: true,
                body: {
                    username: 'Admin',
                    password: 'admin123',
                    _token: token
                }
            }).then( res => {
                cy.visit("/web/index.php/dashboard/index")
                cy.contains("Recruitment").click()
            })
        })
    })
})