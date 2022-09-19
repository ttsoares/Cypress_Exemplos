const elms = require("./elements").ELEMENTS;

class Register {
  acessarCadastro() {
    cy.visit("http://localhost:3000/register");
  }

  preencherCadastro() {
    cy.get(elms.nome).type("Dogs queridos");
    cy.get(elms.email).type("dogs@mail.com");
    cy.get(elms.celular).type("51999999999");
    cy.get(elms.cidade).type("Porto Alegre");
    cy.get(elms.uf).type("RS");

    cy.route("POST", "**/ongs").as("postOng");
    cy.get(elms.submit).click();
  }

  validacaoCadastroDeOngComSucesso() {
    cy.wait("@postOng").then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property("id");
      expect(xhr.response.body.id).is.not.null;
    });
  }
}

export default new Register();
