// cypress/support/component.js
import "./commands"; // Ensure commands.js exists

beforeEach(() => {
  cy.log("Running component test...");
});
