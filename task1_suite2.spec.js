

describe('Test Suite 2', () => {
    beforeEach(() => {
        cy.visit('https://www.seleniumeasy.com/test/table-search-filter-demo.html');
    });
    it('Test Case 1: To search for an entry in the table. ', () => {

        cy.get('#task-table-filter').type('Bug');

        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Bug')
    });
    it('Test Case 2:o check that filters are disabled before clicking on filter icon, then filter by username', () => {
        
        cy.get(':nth-child(1) > .form-control').should('be.disabled');
        cy.get('.filters > :nth-child(2) > .form-control').should('be.disabled');
        cy.get(':nth-child(3) > .form-control').should('be.disabled');
        cy.get(':nth-child(4) > .form-control').should('be.disabled');

        cy.get('body > div.container-fluid.text-center > div > div.col-md-6.text-left > div:nth-child(3) > div > div > div > button > span').click();
        cy.get('body > div.container-fluid.text-center > div > div.col-md-6.text-left > div:nth-child(3) > div > table > thead > tr > th:nth-child(2) > input').type('jacobs');

        cy.get(':nth-child(3) > .panel > .table > tbody > :nth-child(2) > :nth-child(2)').should('contain', 'jacobs')

    });
});

