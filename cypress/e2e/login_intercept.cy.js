describe('OrangeHRM Login Automation with Cypress Intercept', () => {

    const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    beforeEach(() => {
        cy.visit(URL);
    });

    //========================================================
    // TC001
    //========================================================

    it('TC001 - Login Success (Action Summary)', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/employees/action-summary'
        ).as('actionSummary');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@actionSummary')
            .its('response.statusCode')
            .should('eq', 200);

        cy.url().should('include', 'dashboard');

    });

    //========================================================
    // TC002
    //========================================================

    it('TC002 - Dashboard Locations', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/employees/locations'
        ).as('locations');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@locations')
            .its('response.statusCode')
            .should('eq', 200);

    });

    //========================================================
    // TC003
    //========================================================

    it('TC003 - Dashboard Subunit', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/employees/subunit'
        ).as('subunit');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@subunit')
            .its('response.statusCode')
            .should('eq', 200);

    });

    //========================================================
    // TC004
    //========================================================

    it('TC004 - Dashboard Shortcuts', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/shortcuts'
        ).as('shortcuts');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@shortcuts')
            .its('response.statusCode')
            .should('eq', 200);

    });

    //========================================================
    // TC005
    //========================================================

    it('TC005 - Dashboard Leaves', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/employees/leaves*'
        ).as('leaves');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@leaves')
            .its('response.statusCode')
            .should('eq', 200);

    });

    //========================================================
    // TC006
    //========================================================

    it('TC006 - Dashboard Time At Work', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/employees/time-at-work*'
        ).as('timeAtWork');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@timeAtWork')
            .its('response.statusCode')
            .should('eq', 200);

    });

    //========================================================
    // TC007
    //========================================================

    it('TC007 - Core Messages', () => {

        cy.intercept(
            'GET',
            '**/core/i18n/messages*'
        ).as('messages');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@messages');

        cy.url().should('include', 'dashboard');

    });

    //========================================================
    // TC008
    //========================================================

    it('TC008 - Logout Successfully', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/shortcuts'
        ).as('dashboard');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.wait('@dashboard');

        cy.get('.oxd-userdropdown-tab')
            .should('be.visible')
            .click();

        cy.contains('Logout')
            .should('be.visible')
            .click();

        cy.url().should('include', '/auth/login');

    });

});