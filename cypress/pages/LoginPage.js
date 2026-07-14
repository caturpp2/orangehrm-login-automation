class LoginPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    // inputUsername(username) {
    //     cy.get('input[name="username"]').clear().type(username);
    // }

    // inputPassword(password) {
    //     cy.get('input[name="password"]').clear().type(password);
    // }

    inputUsername(username) {
        cy.get('input[name="username"]').clear();

        if (username) {
            cy.get('input[name="username"]').type(username);
        }
    }

    inputPassword(password) {
        cy.get('input[name="password"]').clear();

        if (password) {
            cy.get('input[name="password"]').type(password);
        }
    }


    clickLogin() {
        cy.get('button[type="submit"]').click();
    }

    login(username, password) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickLogin();
    }

    verifyInvalidCredential() {
        cy.contains('Invalid credentials').should('be.visible');
    }

    // verifyRequired() {
    //     cy.contains('Required').should('be.visible');
    // }

    verifyRequired() {
        cy.contains('Required').should('be.visible');
        cy.get('.oxd-input-field-error-message')
        .should('have.length.at.least', 1);
    }

}

export default new LoginPage();