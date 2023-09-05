/// <reference types="cypress" />

describe("Iterate over elements", () => {
  beforeEach(function () {
    cy.visit(Cypress.env("AutomationStore_WebPage"));
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information of all hair care products", () => {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    //cy.visit("https://automationteststore.com/");
    //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.selectProduct("Seaweed Conditioner");
    /*
    This code for selectProduct is present in Support/commands.js
    
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });*/
  });

  it("Add new specific product to basket", () => {
    //cy.visit("https://automationteststore.com/");
    //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add another new specific product to basket", () => {
    //cy.visit("https://automationteststore.com/");
    //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.selectProduct("Pantene Pro-V Conditioner, Classic Care");
  });
});
