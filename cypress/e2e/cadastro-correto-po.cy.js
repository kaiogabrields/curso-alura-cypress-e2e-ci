import Cadastro from '../support/pages/cadastro/page-cadastro';

describe('Página de cadastro', () => {
    beforeEach(() => {
        Cadastro.acessarPaginaDeCadastro();
    })
           
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            Cadastro.acessarPaginaDeCadastro();
            Cadastro.preencherFormulario();
            Cadastro.submeterCadastro();
       
        })
     })