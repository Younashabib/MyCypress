/// <reference types = "Cypress" />

describe("hooks", function () {
  before(function () {
    // runs once before the first test in this block
  });

  after(function () {
    // runs once after the last test in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

  // test cases
});

describe("", () => {
  it("", () => {
    cy.visit("https://www.webdriveruniversity.com/index.html");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
  });
});
