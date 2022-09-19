/// <reference types="cypress" />
//b6a4e2ff
import Logon from "../support/pages/Logon";
import Register from "../support/pages/Register";
import Profile from "../support/pages/Profile";
import NewIncident from "../support/pages/NewIncident";

describe("Ongs", () => {
  it("devem poder realizar um cadastro", () => {
    Register.acessarCadastro();
    Register.preencherCadastro();
    Register.validacaoCadastroDeOngComSucesso();
  });

  it("deve poder realizar um login no sistema", () => {
    Logon.acessarLogin();
    Logon.preencherLogin();
  });

  it("deve poder realizar o logout no sistema", () => {
    // Logon.acessarLogin();
    // Logon.preencherLogin();

    cy.entrada();

    Profile.clicarNoBotaoLogOut();
  });

  it("deve poder excluir um caso", () => {
    // Logon.acessarLogin();
    // Logon.preencherLogin();
    // Profile.clicarNoBotaoCadastrarNovosCasos();
    // NewIncident.preencherCadastroDeCaso();

    cy.createNewIncident();
    cy.entrada();

    Profile.clicarNoBotaoExcluirUmCaso();
    Profile.validarExclusaoDeCasoComSucesso();
  });

  it("deve poder cadastrar novos casos", () => {
    // Logon.acessarLogin();
    // Logon.preencherLogin();

    cy.entrada();

    Profile.clicarNoBotaoCadastrarNovosCasos();
    NewIncident.preencherCadastroDeCaso();
    NewIncident.validarCadastroDeCasoComSucesso();
  });
});
