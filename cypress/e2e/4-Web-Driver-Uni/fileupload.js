/// <reference types ="Cypress" />

describe("Test file Upload Via Test driver unit", () => {
  before(function () {
    cy.visit("https://www.webdriveruniversity.com/index.html");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
  });

  it("Upload No FIle", () => {
    //cy.visit("https://www.webdriveruniversity.com/index.html");
    //cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#submit-button").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("You need to select a file to upload!");
    });
  });

  it("Upload a File....", () => {
    //cy.visit("https://www.webdriveruniversity.com/index.html");
    //cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });
});
