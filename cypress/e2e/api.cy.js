
describe('api mensagem', () => {
    it('mensagem da api', () => {
        cy.request({ //cria uma requisição com os parametros passando abaixo
            method: 'GET', //verbo que a requisição vai ser feita
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/6614bd1b-65e4-4229-82ed-3575cd08572e', //url pra qual o verbo vai chamar
            headers: Cypress.env() //o header requer um token estamos passando ele atraves da variavel
        }).then((res) => { // Então(valida)
            expect(res.status).to.be.equal(200) //pega a resposta recebida da api e confirma que o status code seja igual a 200(ok)
            expect(res.body).is.not.empty //confirma que o body da requisição não retornou vazio
            expect(res.body).to.have.property('msg') //confirma que dentro do body de resposta tem uma propriedade 'msg' que é onde vai conter nossa resposta
        })
    })
})