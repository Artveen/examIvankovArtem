import searchExistingProductPageByPage from "../support/helper"

describe('Positive scenarios',()=>{


it('Search and order item from main page and order it', () => {
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('[aria-label="Show/hide account menu"]').click();
    cy.get('button[aria-label="Go to login page"]').click();
    cy.get('[aria-label="Text field for the login email"]').type('pap123@papa.com');
    cy.get('[aria-label="Text field for the login password"]').type('pwd123@Aa');
    cy.get('[aria-label="Login"]').click();

    cy.get('[aria-label="dismiss cookie message"]').click();
    searchExistingProductPageByPage(' Orange Juice (1000ml) ');
  })
})