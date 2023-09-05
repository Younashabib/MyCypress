// First step to develop Page object is to import the page object code

import HomePage_PageObject from "../../support/pageObjects/WebDriver-Uni/HomePage_PageObject";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    //Page Object Model (First Step is to import page object code)
    //Second step is to reference and initialize the page object using a constant

    const WebDriverHomePage_PageObject = HomePage_PageObject();

    //WebDriverHomePage_PageObject.visitHomePage();
    /* Old Method to get website
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    */
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.webpage_WebDriverUniversity();
    cy.webdriverUni_ContactForm_Submission(
      Cypress.env("first_name"), //Using Global Cypress Variable Method
      data.last_name, //Using Fixture Variable Method, defining cypress fixture on top and getting data from fixture file example.json
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      //cy.visit("http://www.webdriveruniversity.com");
      //cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
      //cy.document().should("have.property", "charset").and("eq", "UTF-8");
      //cy.title().should("include", "WebDriver | Contact Us");
      //cy.url().should("include", "contactus");
      //cy.get('#contact-us').click({force: true})
      // cy.get('[name="first_name"]').type(data.first_name);
      // cy.get('[name="last_name"]').type(data.last_name);
      // cy.get('[name="email"]').type(data.email)
      // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
      // cy.get('[type="submit"]').click();
      // cy.get('h1').should('have.text', 'Thank You for your Message!')
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.webpage_WebDriverUniversity();
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.visit("http://www.webdriveruniversity.com");
    //cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('body').contains('Error: all fields are required');
  });
});
