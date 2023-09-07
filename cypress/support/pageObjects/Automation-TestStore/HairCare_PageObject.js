class HairCare_PageObject {
  visitHomePage_and_VerfifyHomePage() {
    cy.visit("https://automationteststore.com/");
    cy.url().should("contain", "automationteststore.com");
    cy.title().should("include", "A place to practice your automation skills!");
  }
  navigate_To_HairCare_Page() {
    cy.get("#categorymenu")
      .contains("Hair Care")
      .as("HairCarePageLink")
      .click();
  }
  verify_HairCare_Page() {}
}

export default HairCare_PageObject;
