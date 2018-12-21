import { element, by, ElementFinder } from 'protractor';

export class BudgetComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-budget div table .btn-danger'));
    title = element.all(by.css('jhi-budget div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getText();
    }
}

export class BudgetUpdatePage {
    pageTitle = element(by.id('jhi-budget-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    expectedTotalInput = element(by.id('field_expectedTotal'));
    actualTotalInput = element(by.id('field_actualTotal'));
    startDateInput = element(by.id('field_startDate'));
    endDateInput = element(by.id('field_endDate'));
    userDetailsSelect = element(by.id('field_userDetails'));

    async getPageTitle() {
        return this.pageTitle.getText();
    }

    async setExpectedTotalInput(expectedTotal) {
        await this.expectedTotalInput.sendKeys(expectedTotal);
    }

    async getExpectedTotalInput() {
        return this.expectedTotalInput.getAttribute('value');
    }

    async setActualTotalInput(actualTotal) {
        await this.actualTotalInput.sendKeys(actualTotal);
    }

    async getActualTotalInput() {
        return this.actualTotalInput.getAttribute('value');
    }

    async setStartDateInput(startDate) {
        await this.startDateInput.sendKeys(startDate);
    }

    async getStartDateInput() {
        return this.startDateInput.getAttribute('value');
    }

    async setEndDateInput(endDate) {
        await this.endDateInput.sendKeys(endDate);
    }

    async getEndDateInput() {
        return this.endDateInput.getAttribute('value');
    }

    async userDetailsSelectLastOption() {
        await this.userDetailsSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userDetailsSelectOption(option) {
        await this.userDetailsSelect.sendKeys(option);
    }

    getUserDetailsSelect(): ElementFinder {
        return this.userDetailsSelect;
    }

    async getUserDetailsSelectedOption() {
        return this.userDetailsSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class BudgetDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-budget-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-budget'));

    async getDialogTitle() {
        return this.dialogTitle.getText();
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
