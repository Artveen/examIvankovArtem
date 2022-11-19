class authorizationPage{
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
    getLogoutAccount(){
        return cy.get('[id="navbarAccount"]')
    }
    submitLogOut(){
        return cy.get('[id="navbarLogoutButton"]')
    }



    submitLoginForm(email, password){
     cy.log("Login in cabinet")
     this.clickWelcomeDismissButton().click();
     this.clickAccountButton().click();
     this.openLoginWindow().click();
     this.getEmailField().type(email);
     this.getPasswordField().type(password);
     this.getCheckboxClick().click();
     this.getSubmitButton().click();
     this.getLogoutAccount().click();
     this.submitLogOut().click();
    }
    unvalidLogin(incorrectEmail, incorrectPassword)
    {
    cy.log("Login in cabinet")
    this.clickWelcomeDismissButton().click();
    this.clickAccountButton().click();
    this.openLoginWindow().click();
    this.getEmailField().type(incorrectEmail);
    this.getPasswordField().type(incorrectPassword);
    this.getCheckboxClick().click();
    this.getSubmitButton().click();
    }
    
} export default new authorizationPage 