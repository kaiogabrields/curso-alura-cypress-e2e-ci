import {usuarios} from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/cadastro")
    })
    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário corretamente', () =>{
            cy.get('input[id="name"]').clear().type(usuario.name)
            cy.get('input[id="email"]').clear().type(usuario.email)
            cy.get('input[id="pass-create"]').clear().type(usuario.password)
            cy.get('input[id="pass-confirm"]').clear().type(usuario.password)
            cy.get('button[type="submit"]').click()
        })
    })
})