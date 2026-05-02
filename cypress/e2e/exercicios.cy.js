describe("Lista de exercicios", () => {
  it("Exercício 1: Visitar a página do AdoPet e clicar no botão 'Ver pets disponíveis para adoção'", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.contains("a", "Ver pets disponíveis para adoção").click();
  });

  it("Exercício 2: Visitar a página do AdoPet e testar os botoes header", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-cy="home-link"]').click();
  });

  it("Exercício 3: Visitar a página de Login do AdoPet", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/login");
    cy.get("a.header__message").click();
  });
});
