import windowsAction from "../../actions/windows-action";

describe('Validação de nova janela', () => {
    beforeEach(() => {
        cy.visit('/')
      });


    it('Abrir uma nova janela e validar a mensagem', () => {
        windowsAction.clickMenuWindows();
        windowsAction.validateNewWindow();
        windowsAction.newWindowAction();
    });
});