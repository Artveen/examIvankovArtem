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
    getYourBasketButton(){
        return cy.get('[aria-label="Show the shopping cart"]')
    }
    getCheckoutButton(){
      return cy.get('[id="checkoutButton"]')  
    }
    getAddNewAddressButton(){
        return cy.get('[aria-label="Add a new address"]')
    }
    getCountryField(){
        return cy.get('[id="mat-input-9"]')
    }
    getNameField(){
        return cy.get('[id="mat-input-10"]')
    }
    getMobileNumberField(){
        return cy.get('[id="mat-input-11"]')
    }
    getZipCodeField(){
        return cy.get('[id="mat-input-12"]')
    }
    getAddressField(){
        return cy.get('[id="address"]')
    }
    getCityField(){
        return cy.get('[id="mat-input-14"]')
    }
    getStateField(){
        return cy.get('[id="mat-input-15"]')
    }
    getSubmitAddressButton(){
        return cy.get('[id="submitButton"]')
    }
    bookOrder(email,password,country,name,mobileNumber,zipCode,address,city,state){
      cy.log("Create new order")
      this.clickWelcomeDismissButton().click();
      this.clickAccountButton().click();
      this.openLoginWindow().click();
      this.getEmailField().type(email);
      this.getPasswordField().type(password);
      this.getCheckboxClick().click();
      this.getSubmitButton().click();
      this.getAddToBasketButton().click();
      this.getYourBasketButton().click();
      this.getCheckoutButton().click();
      this.getAddNewAddressButton().click();
      this.getCountryField().type(country);
      this.getNameField().type(name);
      this.getMobileNumberField().type(mobileNumber);
      this.getZipCodeField().type(zipCode);
      this.getAddressField().type(address);
      this.getCityField().type(city);
      this.getStateField().type(state);
      this.getSubmitAddressButton().click()
    }
    }export default new bookingPage 