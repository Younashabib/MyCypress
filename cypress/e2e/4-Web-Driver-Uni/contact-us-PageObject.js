import HomePage_PO from "../../support/pageObjects/WebDriver-Uni/HomePage_PageObject";
import ContactUs_PageObject from "../../support/pageObjects/WebDriver-Uni/Contact_Us_PageObject";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  const homePage_PO = new HomePage_PO();
  const ContactUsPageForm = new ContactUs_PageObject();
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    //cy.visit("http://www.webdriveruniversity.com");
    //cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    //see HomePage_PageObjects.js
    homePage_PO.visitHomepage();
    homePage_PO.clickOn_ContactUs_Button();
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    ContactUsPageForm.Contact_Form_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUsPageForm.Contact_Form_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
