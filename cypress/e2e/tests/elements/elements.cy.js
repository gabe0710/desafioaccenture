import elementsAction from "../../actions/elements-action";

describe('Validação de registro', () => {
    beforeEach(() => {
        cy.visit('/')
      });


    it('Criação, edição e exclusão de registro', () => {
        elementsAction.clickMenuElements();
        elementsAction.addRegisterTable();
        elementsAction.editRegisterTable();
        elementsAction.deleteRegisterTable();
    });
});