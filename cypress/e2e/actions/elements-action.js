import { elementsElements } from "../elements/elements-elements";

class elementsActions {
    clickMenuElements() {
        cy.get(elementsElements.clickMenuElements).eq(0).click();
        cy.get(elementsElements.clickSubmenuWebTables).click();
    };

    addRegisterTable() {
        cy.get(elementsElements.clickAddRegister).click();
        cy.get(elementsElements.inputFirstNameRegister).type('Teste');
        cy.get(elementsElements.inputLastNameRegister).type('Teste');
        cy.get(elementsElements.inputEmailRegister).type('teste@teste.com');
        cy.get(elementsElements.inputAgeRegister).type('50');
        cy.get(elementsElements.inputSalaryRegister).type('1000');
        cy.get(elementsElements.inputDepartmentRegister).type('Teste');
        cy.get(elementsElements.clickSubmitRegister).click();
        cy.contains('teste@teste.com').should('be.visible');
    };

    editRegisterTable(){
        cy.get(elementsElements.clickEditButton).click();
        cy.get(elementsElements.inputEmailRegister).clear().type('tiopatinhas@tiopatinhas.com');
        cy.get(elementsElements.clickSubmitRegister).click();
        cy.contains('tiopatinhas@tiopatinhas.com').should('be.visible');
    };

    deleteRegisterTable() {
        cy.get(elementsElements.clickDeleteButton).click();
        cy.contains('tiopatinhas@tiopatinhas.com').should('not.exist');
    };

};

export default new elementsActions();