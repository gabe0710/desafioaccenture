import { widgetsElements } from "../elements/widgets-elements";

class widgetsActions {
    clickMenuWidgets() {
        cy.get(widgetsElements.clickMenuWidgets).eq(3).click();
        cy.get(widgetsElements.clickSubmenuWidgets).click();
    };

    startProgressBar() {
        cy.get(widgetsElements.clickStartStopButtonPb).click();
        cy.wait(2000);
        cy.get(widgetsElements.clickStartStopButtonPb).click();
    }

    validatePercentagePb() {
        cy.get(widgetsElements.progressBar).invoke('text').then((progress) => {
            const progressValue = parseInt(progress.replace('%', ''), 10);
            expect(progressValue).to.be.lte(25);
          });
    }

    validatePercentageRestart() {
        cy.get(widgetsElements.clickStartStopButtonPb).click();
        cy.wait(12000);
        cy.get(widgetsElements.progressBar)
            .invoke('text')
            .then((progress) => {
            const progressValue = parseInt(progress.replace('%', '').trim(), 10); 
            expect(progressValue).to.equal(100); 
            cy.get(widgetsElements.clickRestButtonPb).click();
        });
    }

};

export default new widgetsActions();