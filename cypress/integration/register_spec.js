describe("/Register", () => {
    it("check nav to register", () => {
      cy.visit("/RegisterAuth");
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
  
    it("navigates to / on successful registration", () => {
      cy.get("#first-name-input").type("PJ");
      cy.get("#last-name-input").type("Brennan");
      cy.get("#email-input").type("pjbren@hotmail.com");
      cy.get("#password-input").type("password{enter}");
    });
  });