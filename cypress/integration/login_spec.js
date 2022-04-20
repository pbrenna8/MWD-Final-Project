describe("/Login", () => {
    it("check login", () => {
      cy.visit("/Login");
    });
    it("asks for email", () => {
      cy.contains("Email");
    });
    it("asks for password", () => {
      cy.contains("Password");
    });
    it("navigates to / on successful login and authorization", () => {
      cy.get("#email-input").type("pjbren@hotmail.com");
      cy.get("#password-input").type("password");
      cy.get(".btn").click();
      cy.url().should('eq', 'http://localhost:3000/');
      cy.visit("/Login");
      cy.contains("You already logged in!");
    });
  });