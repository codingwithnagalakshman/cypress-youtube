describe('template spec', () => {
  it('passes', () => {
    cy.visit('/web/index.php/auth/login')
  })  

  it("should redirect to login page", () => {
    cy.visit("/web/index.php/dashboard/index")
    cy.url().should('contain', '/web/index.php/auth/login')
    cy.contains("Login")
  })

  it("should navigate to dashboard", () => {
    cy.visit('/web/index.php/auth/login')
    cy.get("[name='username']").clear().type("Admin")
    cy.get("[name='password']").clear().type("admin123")
    cy.get('form').submit()
    cy.url().should('contain', '/web/index.php/dashboard/index')
  })
})