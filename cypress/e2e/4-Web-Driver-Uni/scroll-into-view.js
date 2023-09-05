/// <reference types ="Cypress" />

describe("Test Mouse Actions", () => {
  it("Scroll Element into View", () => {
    cy.visit("/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.url().should("include", "Actions/index.html");
  });

  it("Should be able to drag and drop draggable item", () => {
    cy.visit("/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.url().should("include", "Actions/index.html");

    cy.get("#draggable").trigger("dragstart", { which: 1 });
    cy.get("#droppable").trigger("mousemove").trigger("drop", { force: true });
  });

  it("Should be able to double mouse click", () => {
    cy.visit("/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.url().should("include", "Actions/index.html");
    cy.get("#double-click").dblclick();
  });

  it("Should be able to hold down left mouse click on item", () => {
    cy.visit("/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.url().should("include", "Actions/index.html");
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
