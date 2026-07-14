class DashboardPage {

    verifyDashboard() {
        cy.url().should('include', 'dashboard');
    }

    openUserMenu() {
        cy.get('.oxd-userdropdown-tab').click();
    }

    clickLogout() {
        cy.contains('Logout').click();
    }

    verifyLoginPage() {
        cy.url().should('include', 'login');
    }

}

export default new DashboardPage();