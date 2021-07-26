
describe('Test Suite 3', () => {
    beforeEach(() => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
    });

    it('Test Case 1: Single checkbox demo ', () => {
        cy.get('#isAgeSelected').check();

        cy.get('#txtAge').should('contain', 'Success - Check box is checked')
    });

    it('Test Case 2:Multiple checkbox demo ', () => {
        cy.get('#check1').click();
        
        cy.get(':nth-child(3) > label > .cb1-element').should('be.checked');
        cy.get(':nth-child(4) > label > .cb1-element').should('be.checked');
        cy.get(':nth-child(5) > label > .cb1-element').should('be.checked');
        cy.get(':nth-child(6) > label > .cb1-element').should('be.checked')
    });
});