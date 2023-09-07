import HairCare_PageObject from "../../support/pageObjects/Automation-TestStore/HairCare_PageObject";

/// <reference types = "Cypress" />

describe("Hair Care Page Verification", () => {
  const HairCarePage = new HairCare_PageObject();

  it("Verify HairCare Page", () => {
    HairCarePage.visitHomePage_and_VerfifyHomePage();
    HairCarePage.navigate_To_HairCare_Page();
    HairCarePage.verify_HairCare_Page();
  });
});
