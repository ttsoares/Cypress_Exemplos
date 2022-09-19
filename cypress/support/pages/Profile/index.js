const elms = require("./elements").ELEMENTS;

class Profile {
  clicarNoBotaoLogOut() {
    cy.get(elms.logout).click();
  }

  clicarNoBotaoCadastrarNovosCasos() {
    cy.get(elms.newIncident).click();
  }

  clicarNoBotaoExcluirUmCaso() {
    cy.server();

    cy.route("DELETE", "**/incidents/*").as("deleteIncident");

    cy.get(elms.delete).click();
  }

  validarExclusaoDeCasoComSucesso() {
    cy.wait("@deleteIncident").then((xhr) => {
      expect(xhr.status).to.eq(204);
      expect(xhr.response.body).to.be.empty;
    });
  }
}

export default new Profile();
