import widgetsAction from "../../actions/widgets-action";

describe('Validação de progressbar', () => {
    beforeEach(() => {
        cy.visit('/')
      });


    it('Funcionamento do progressbar iniciando e pausando', () => {
        widgetsAction.clickMenuWidgets();
        widgetsAction.startProgressBar();
        widgetsAction.validatePercentagePb();
    });

    it('Funcionamento do progressbar iniciando e pausando', () => {
        widgetsAction.clickMenuWidgets();
        widgetsAction.validatePercentageRestart();
    });
});