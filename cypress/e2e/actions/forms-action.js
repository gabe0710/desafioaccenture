import { formsElements } from "../elements/forms-elements";

class formsActions {
    clickForms() {
        cy.get(formsElements.clickForms).eq(1).click();
        cy.get(formsElements.clickPracticeForms).eq(1).click();
    };

    fillFormsPart1() {
        cy.get(formsElements.inputFirstName).type('Gabriel');
        cy.get(formsElements.inputLastName).type('Ribeiro');
        cy.get(formsElements.inputEmail).type('gabriel@gmail.com');
        cy.get(formsElements.inputGender).eq(0).click();
        cy.get(formsElements.inputNumber).should('be.visible').type('8199999999');
        cy.get(formsElements.clickDate).click();
        cy.get(formsElements.inputYear).select('2000');
        cy.get(formsElements.inputMonth).select('October');
        cy.get(formsElements.inputDay).click();        
        cy.get(formsElements.selectSubject).should('be.visible').type('English{enter}');
        cy.get(formsElements.selectCheckBox).click();
        cy.get(formsElements.uploadFile).attachFile('forms.txt');
        cy.get(formsElements.inputAddress).type('Rua José Alfredo, 115, Rio Branco - Acre');      
        cy.get(formsElements.selectState).should('be.visible').click();
        cy.get(formsElements.selectStateNcr).should('be.visible').click();
        cy.get(formsElements.selectCity).should('be.visible').click();
        cy.get(formsElements.selectCityDelhi).should('be.visible').click();
        cy.get(formsElements.clickSubmit).click();        
    };

    validadtePopup() {
        cy.get(formsElements.popUp).contains('Thanks for submitting the form').should('be.visible');
        cy.get(formsElements.closedPopup).click();
        cy.get(formsElements.popUp).should('not.exist');
    };

};

export default new formsActions();
