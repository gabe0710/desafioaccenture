import { interactionsElements } from "../elements/interactions-elements";

class interactionsActions {
    clickMenuInteractions() {
        cy.get(interactionsElements.clickMenuInteractions).eq(4).click();
        cy.get(interactionsElements.clickSubmenuInteractions).click();
    };

    movingDownward() {
        cy.contains('One').should('be.visible');
        cy.contains('Two').should('be.visible');
        cy.contains('Three').should('be.visible');
        cy.contains('Four').should('be.visible');
        cy.contains('Five').should('be.visible');
        cy.contains('Six').should('be.visible');
    }
};

export default new interactionsActions();