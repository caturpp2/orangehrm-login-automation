import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';

describe('OrangeHRM Login Automation with POM', () => {

    let data;

    before(() => {
        cy.fixture('loginPOM').then((fixtureData) => {
            data = fixtureData;
        });
    });

    beforeEach(() => {
        LoginPage.visit();
    });

    it('TC001 Login Valid', () => {

        LoginPage.login(
            data.validUser.username,
            data.validUser.password
        );

        DashboardPage.verifyDashboard();

    });

    it('TC002 Invalid Username', () => {

        LoginPage.login(
            data.invalidUser.username,
            data.invalidUser.password
        );

        LoginPage.verifyInvalidCredential();

    });

    it('TC003 Invalid Password', () => {

        LoginPage.login(
            data.invalidPassword.username,
            data.invalidPassword.password
        );

        LoginPage.verifyInvalidCredential();

    });

    it('TC004 Empty Username', () => {

        LoginPage.login(
            '',
            data.validUser.password
        );

        LoginPage.verifyRequired();

    });

    it('TC005 Empty Password', () => {

        LoginPage.login(
            data.validUser.username,
            ''
        );

        LoginPage.verifyRequired();

    });

    it('TC006 Empty Credential', () => {

        LoginPage.login('', '');

        LoginPage.verifyRequired();

    });

    it('TC007 Username Uppercase', () => {

        LoginPage.login(
            data.uppercase.username,
            data.uppercase.password
        );

        DashboardPage.verifyDashboard();

    });

    it('TC008 Logout', () => {

        LoginPage.login(
            data.validUser.username,
            data.validUser.password
        );

        DashboardPage.verifyDashboard();

        DashboardPage.openUserMenu();

        DashboardPage.clickLogout();

        DashboardPage.verifyLoginPage();

    });

});