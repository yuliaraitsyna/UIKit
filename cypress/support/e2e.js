Cypress.on("uncaught:exception", (err, runnable) => {
  console.error("Uncaught Exception:", err);
  return false;
});
