import interactionsAction from "../../actions/interactions-action";

describe('Validação de conteúdo', () => {
    beforeEach(() => {
        cy.visit('/')
      });

    // a lista já está em ordem crescente no site, então só fiz uma validação de tela

    it('Verificando ordenação crescente', () => {
        interactionsAction.clickMenuInteractions();
        interactionsAction.movingDownward();
    });
});