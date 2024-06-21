import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get(el.registerButton).click();

    }
    preencherFormulario(){
        cy.get(el.inputNome).type('Carolinda');
        cy.get(el.inputEmail).type('carolina@email.com');
        cy.get(el.inputSenha).type('Senha123');
        cy.get(el.inputConfirmaSenha).type('Senha123');
    }
    submeterCadastro(){
        cy.get(el.btnCadastrar).click();
    }
}

export default new Cadastro();