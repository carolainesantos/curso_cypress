describe("Exercicios de fixação", () => {
  it("passes", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.contains("a", "Ver pets disponíveis para adoção").click();
    cy.get("a.header__home").click();
    // cy.get("a.header__message").click();
    cy.contains("a", "Fazer login").click();
  });
});
