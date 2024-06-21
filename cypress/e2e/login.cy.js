describe('login', () => {
    beforeEach(()=>{
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")
        cy.contains("Já tem conta? Faça seu login:").should("be.visible")
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:404,
        }).as('stubPost')
    })

    it('login com sucesso', () => { 
        cy.login('kffs@hotmail.com', '12345maMA@')
        cy.contains('Veja os amigos disponíveis para adoção!').should('be.visible')

    });

    it('Verifica mensagem de falha no login', () =>{
        cy.login('kffs@hotmail.com', '12345maMA@')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
});