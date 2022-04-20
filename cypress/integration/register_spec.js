describe("/Register", () => {
    it("check nav to register", () => {
      cy.visit("/Register");
    });
    it("asks for First Name", () => {
        cy.contains("First Name");
      });
    it("asks for Last Name", () => {
        cy.contains("Last Name");
      });
    it("asks for email", () => {
      cy.contains("Email");
    });
    it("asks for password", () => {
      cy.contains("Password");
    });
    it("navigates to / on successful registration", () => {
      cy.get("#first-name-input").type("PJ");
      cy.get("#last-name-input").type("Brennan");
      cy.get("#email-input").type("b@a.com");
      cy.get("#password-input").type("password");
      cy.get(".btn").click();
      cy.url().should('eq', 'http://localhost:3000/');
      cy.visit("/Register");
      cy.contains("You already logged in!");
    });
  });