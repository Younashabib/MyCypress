/// <reference types = "Cypress" />

describe("Adding Multiple Items to The Basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit(Cypress.env("AutomationStore_WebPage")); // in cypress config file, base URL is defined
  });

  it("Add Specific items to the Basket", () => {
    cy.webpage_AutomationStore_PageVerification();
    cy.get("#categorymenu").contains("Hair Care").click().as("HairCarePage");
    cy.get("@HairCarePage").url().should("contain", "category&path=52"); //Verify HairCarePage
    globalThis.data.productName.forEach((element) => {
      cy.AddProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });
});
