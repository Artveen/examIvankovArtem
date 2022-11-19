class registrationPage{
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
    openRegistrationWindow(){
        return cy.get ('[class="primary-link"]')
    }
    getEmailField(){
        return cy.get('[id="emailControl"]')
    }
    getPasswordField(){
        return cy.get('[id="passwordControl"]')
    }
    getRepeatPasswordField(){
        return cy.get('[id="repeatPasswordControl"]')
    }
    getQuestionField(){
        return cy.get('[id="mat-select-value-3"]')
    }
    chooseAnswerField(){
        return cy.get('[id="mat-option-5"]')
    }
    getAnswerTypeField(){
        return cy.get('[id="securityAnswerControl"]')
    }
    getRegistrationButton(){
        return cy.get('[id="registerButton"]')
    }
    createNewCustomer(email, password,repeatPassword,answer){
       cy.log("Fill registration form and submit new customer")
       this.clickWelcomeDismissButton().click();
       this.clickAccountButton().click();
       this.openLoginWindow().click();
       this.openRegistrationWindow().click();
       this.getEmailField().type(email);
       this.getPasswordField().type(password);
       this.getRepeatPasswordField().type(repeatPassword);
       this.getQuestionField().click();
       this.chooseAnswerField().click();
       this.getAnswerTypeField().type(answer);
       this.getRegistrationButton().click()
    }
   submitRegistrationFormWithLongPassword(unvalidEmail, unvalidPassword,unvalidRepeatPassword,answer){
    cy.log("Fill registration form with long password and incorrect Email")
       this.clickWelcomeDismissButton().click();
       this.clickAccountButton().click();
       this.openLoginWindow().click();
       this.openRegistrationWindow().click();
       this.getEmailField().type(unvalidEmail);
       this.getPasswordField().type(unvalidPassword);
       this.getRepeatPasswordField().type(unvalidRepeatPassword);
       this.getQuestionField().click();
       this.chooseAnswerField().click();
       this.getAnswerTypeField().type(answer);
       this.getRegistrationButton().click()
   }
   } export default new registrationPage();

