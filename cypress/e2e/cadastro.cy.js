describe('Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    cy.contains('Ainda não tem cadastro?').should('be.visible')
  });

  it('Cadastro com sucesso', () => {
    cy.get('input[id="name"]').type('kaio')
    cy.get('input[id="email"]').type('email@teste.com')
    cy.get('input[id="pass-create"]').type('Teste12345#')
    cy.get('input[id="pass-confirm"]').type('Teste12345#')
    cy.get('button[type="submit"]').click()
    cy.contains("Já tem conta? Faça seu login:").should("be.visible")
  })

  it('Cadastro sem preenchimento dos campo email', () =>{
    cy.get('input[id="name"]').type('kaio')
    cy.get('input[id="pass-create"]').type('Teste12345#')
    cy.get('input[id="pass-confirm"]').type('Teste12345#')
    cy.get('button[type="submit"]').click()
    cy.contains('É necessário informar um endereço de email').should('be.visible')
  })
})