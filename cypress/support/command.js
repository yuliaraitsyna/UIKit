import "@testing-library/cypress/add-commands";

Cypress.Commands.add("visitStory", (component, story) => {
  cy.visit(`/iframe.html?id=${component}--${story}`);
});
