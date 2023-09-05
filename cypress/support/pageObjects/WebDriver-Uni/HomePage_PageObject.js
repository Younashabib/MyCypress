/// <reference types ="Cypress"/>

class HomePage_PageObject {
  visitHomePage() {
    cy.visit(Cypress.env("webDriverUni_WebPage"));
  }
}
export default HomePage_PageObject;
