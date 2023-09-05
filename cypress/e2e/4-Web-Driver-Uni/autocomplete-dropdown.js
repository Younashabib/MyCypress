/// <reference types = "Cypress"/>

describe("Verify Autocomplete Dropdown List via Webdriver Unit", () => {
  it("Select Specific Product via Autocomplete list", () => {
    cy.visit("/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.url().should("include", "autocomplete-textfield");
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list").each(($el, index, $list) => {
      const prod = $el.text();
      const productToSelect = "Avocado";

      if (prod === productToSelect) {
        cy.wrap(prod).click();
        cy.get("#submit-button").click();
      }
    });
  });

  it("Select Product via Autocomplete List", () => {
    cy.visit("/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    cy.url().should("include", "autocomplete-textfield");

    cy.get("#myInput").type("Grape");
    cy.get("#myInputautocomplete-list").each(($el, index, $list) => {
      const prod = $el.text();
      const productToSelect = "Grapes";
      if (prod === productToSelect) {
        cy.wrap($el).click();
        cy.get("#submit-button").click();
      }
      cy.url().should("include", "Grapes");
    });
  });
});
