describe("/Login", () => {
    it("check login", () => {
      cy.visit("/LoginAuth");
    });
    it("asks for email", () => {
      cy.contains("Email");
    });
    it("asks for password", () => {
      cy.contains("Password");
    });
    // it("requires email", () => {
    //   cy.get("form").contains("Email").click();
    //   cy.get(".error-messages").should("contain", "Please fill out this field");
    // });
  
    // it("links to #/register", () => {
    //   cy.contains("Need an account?").should("have.attr", "href", "#/register");
    // });
  
    // it("requires email", () => {
    //   cy.get("form").contains("Sign in").click();
    //   cy.get(".error-messages").should("contain", "email can't be blank");
    // });
  
    // it("requires password", () => {
    //   cy.get("[data-test-email]").type("joe@example.com{enter}");
    //   cy.get(".error-messages").should("contain", "password can't be blank");
    // });
  
    // it("requires valid username and password", () => {
    //   cy.get("[data-test=email]").type("joe@example.com");
    //   cy.get("[data-test=password]").type("invalid{enter}");
    //   cy.get(".error-messages").should("contain", "email or password is invalid");
    // });
  
    it("navigates to / on successful login", () => {
      cy.get("#email-input").type("pjbren@hotmail.com");
      cy.get("#password-input").type("password{enter}");
    });
  });