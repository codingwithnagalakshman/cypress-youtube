describe("User already exists test", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it('User alreay exists', () => {
        cy.contains("Admin").click()
        cy.get(".orangehrm-header-container > button").click()
        cy.get(".oxd-input").eq(1).type("Admin")
        cy.wait(1000)
        cy.get('body').then(($body) => {
            if($body.text().includes("Already exists")) {
                cy.get(".oxd-input").eq(1).clear().type(random())
            }
        })

    });

    const random = (length = 10) => {
        // Declare all characters
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
        // Pick characers randomly
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    
        return str;
    
    };
})