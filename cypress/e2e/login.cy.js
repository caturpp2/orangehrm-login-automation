describe('OrangeHRM Login Automation', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(2000)
    })

    it('TC001 Login menggunakan username dan password valid', () => {

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include','dashboard')

    })

    it('TC002 Username salah', () => {

        cy.get('input[name="username"]').type('Admin123')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')

    })

    it('TC003 Password salah', () => {

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')

    })

    it('TC004 Username kosong', () => {

        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')

    })

    it('TC005 Password kosong', () => {

        cy.get('input[name="username"]').type('Admin')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')

    })

    it('TC006 Username dan Password kosong', () => {

        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')

    })

    it('TC007 Username berisi spasi', () => {

        cy.get('input[name="username"]').type(' ')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')

    })

    it('TC008 Password berisi spasi', () => {

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type(' ')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')

    })

    it('TC009 Username uppercase', () => {

        cy.get('input[name="username"]').type('ADMIN')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        // cy.contains('Invalid credentials').should('be.visible')?
        cy.get('input[name="username"]').should('be.visible')

    })

    it('TC010 Username special character', () => {

        cy.get('input[name="username"]').type('@Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')

    })

    it('TC011 Username sangat panjang', () => {

        cy.get('input[name="username"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')

    })

    it('TC012 Logout setelah login', () => {

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include','dashboard')

        cy.get('.oxd-userdropdown-tab').click()

        // cy.contains('Logout').click()
        
        cy.get('.oxd-userdropdown-tab').click()

        cy.get('.oxd-dropdown-menu')
        .contains('Logout')
        .click()

        cy.url().should('include','login')

    })

})