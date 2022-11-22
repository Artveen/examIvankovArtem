class bookingPage{
    visit(){
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
    }
    clickWelcomeDismissButton(){
        return cy.get('[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]')
    }
    clickAccountButton(){
        return cy.get('[id="navbarAccount"]')
    }
    openLoginWindow(){
        return cy.get('[id="navbarLoginButton"]')
    }
    getEmailField(){
        return cy.get('[id="email"]')
    }
    getPasswordField(){
        return cy.get('[id=password]')
    }
    getCheckboxClick(){
        return cy.get('[id="rememberMe"]')
    }
    getSubmitButton(){
        return cy.get('[id="loginButton"]')
     }
     getAddToBasketButton(){
        return cy.contains('mat-card', ' Apple Juice (1000ml) ').find('[aria-label="Add to Basket"]')
    }
    }export default new bookingPage 