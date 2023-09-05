// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});

// Select Elements on WebPage and Click Shopping Cart Icon
Cypress.Commands.add("AddProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get('[class="productcart"]').eq(index).click();
    }
  });
});

Cypress.Commands.add(
  "webdriverUni_ContactForm_Submission",
  (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
  }
);

// To load Web Driver University website and to verify the page
Cypress.Commands.add("webpage_WebDriverUniversity", (websiteLoad) => {
  cy.title().should("include", "WebDriver | Contact Us");
  cy.document().should("have.property", "charset").and("eq", "UTF-8");
  cy.url().should("include", "contactus");
});

// To load Automation Store Page Verification and to verify the page
Cypress.Commands.add(
  "webpage_AutomationStore_PageVerification",
  (websiteLoad) => {
    cy.title().should("include", "A place to practice your automation skills!");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.url().should("include", "automationteststore");
  }
);

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//import "cypress-file-upload";
