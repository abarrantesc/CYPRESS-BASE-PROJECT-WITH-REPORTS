describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("Welcome Page", () => {
    cy.includeText("#login h2","Test login");
  });

  it("Test case 1: Positive LogIn test", () => {

    cy.inputType("#username","student");
    cy.inputType("#password","Password123");

    cy.clickButton(".btn");

    cy.includeText(".post-title","Logged In Successfully");

    cy.contains("Log out").should('be.visible');
    cy.contains("Log out").click();



  });


  it("Test case 2: Negative username test", () => {

    cy.inputType("#username","incorrectUser");
    cy.inputType("#password","Password123");
    cy.clickButton(".btn");

    cy.includeText("#error","Your username is invalid!");
  });


  it("Test case 3: Negative password  test", () => {

    cy.inputType("#username","student");
    cy.inputType("#password","incorrectPassword");
    cy.clickButton(".btn");

    cy.includeText("#error","isYour password is invalid!");
  });



});
