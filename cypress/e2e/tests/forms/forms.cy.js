import formsActions from "../../actions/forms-action";

describe('Preencher Forms', () => {
    beforeEach(() => {
        cy.visit('/')
      });


    it('Preencher e submeter forms com sucesso', () => {
        formsActions.clickForms();
        formsActions.fillFormsPart1();
        // formsActions.fillFormsPart2();
        // formsActions.fillFormsPart3();
        // formsActions.fillFormsPart4();
        formsActions.validadtePopup();
    });
});