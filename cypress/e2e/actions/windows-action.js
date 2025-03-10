import { windowsElements } from "../elements/windows-elements";

class windowaActions {
    clickMenuWindows() {
        cy.get(windowsElements.clickMenuWindows).eq(2).click();
        cy.get(windowsElements.clickSubMenuWindows).click();
    };

    validateNewWindow() {
        cy.get(windowsElements.clickNewWindow).click();
    }

    newWindowAction() {
        cy.visit('/sample');
        cy.contains('This is a sample page').should('be.visible');
    }

};

export default new windowaActions();