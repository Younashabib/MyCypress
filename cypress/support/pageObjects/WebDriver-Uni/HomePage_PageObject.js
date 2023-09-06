class HomePage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("webDriverUni_WebPage")); //see cypress.config.js
  }
  clickOn_ContactUs_Button() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  }
}
export default HomePage_PO;

//Used in Contact-us-PageObject File
