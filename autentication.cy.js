

import { LoginPage } from "../pageObjects/loginPage";

const Authenticate = new LoginPage();

describe('User Login', () => {
  beforeEach (function(){
    Authenticate.NavigatePage()
  })

  describe('User Login', () => {
    // This block of code runs before each test case.
    beforeEach(function() {
      // Navigate to the page using a function named 'NavigatePage'.
      Authenticate.NavigatePage();
    });
  
    // This is the first test case.
    it("test 1: Authenticate Standard_user", () => {
      // Load user data from a fixture named 'standard_user'.
      cy.fixture("standard_user").as("user");
  
      // Retrieve the user data 
      cy.get('@user').then((user) => {
        Authenticate.login(user);
      });
  
      // Open the burger menu.
      cy.get("#react-burger-menu-btn").click();
  
      // Wait for a short duration 
      cy.wait(500);
  
      // Check if the 'Logout' link is visible and contains the text 'Logout'.
      cy.get("a#logout_sidebar_link")
        .should("be.visible")
        .invoke("text")
        .and("include", "Logout");
  
      // Click the Logout button.
      cy.get("a#logout_sidebar_link")
        .click();
    });
  });
  
  
  it("test 2: Authenticate locked_out_user", ()=> {

    cy.fixture("locked_user").as("user")
    cy.get('@user').then((user )=>{
      Authenticate.login(user)
    })
    cy.get('h3[data-test="error"]')
    .should("be.visible")
    .invoke("text")
    .and("include", "Epic sadface: Sorry, this user has been locked out.")
   
    
    
  })

  it("test 3: Authenticate problem_user", ()=> {

    cy.fixture("problem_user").as("user")
    cy.get('@user').then((user )=>{
      Authenticate.login(user)
    })
    
  }
  )
  it("test 4: Authenticate glitch_user ", ()=> {

    cy.fixture("performance_glitch_user").as("user")
    cy.get('@user').then((user )=>{
      Authenticate.login(user)
    })
  })
  it("test 5: Authenticate invalid user ", ()=> { // invalid user was created to check login details with invalid credentails.

    cy.fixture("invalid_user").as("user")
    cy.get('@user').then((user )=>{
      Authenticate.login(user)
    })
    cy.get('h3[data-test="error"]')
    .should("be.visible")
    .invoke("text")
    .and("include", "Epic sadface: Username and password do not match any user in this service")
  })

  it("test 6: Adding items in the cart", () => {
    // Load user data from a fixture named 'standard_user'.
    cy.fixture("standard_user").as("user");
  
    // Retrieve the user data from the alias 'user' and perform the login.
    cy.get('@user').then((user) => {
      Authenticate.login(user);
    });
  
    // Click on the 'Add to Cart' button for the 'sauce-labs-backpack' item.
    cy.get("#add-to-cart-sauce-labs-backpack")
      .click();
  
    // Click on the 'Add to Cart' button for the 'sauce-labs-bike-light' item.
    cy.get("#add-to-cart-sauce-labs-bike-light")
      .click();
  
    // Click on the shopping cart link to view the cart.
    cy.get('a.shopping_cart_link')
      .click();
  
    // Click 'Checkout' button.
    cy.get("#checkout")
      .click();
  
    // Wait short duration 
    cy.wait(500);
  
    // Fill out the checkout with information of user.
    cy.get('#first-name').clear().type('Syed zaki');
    cy.get('#last-name').clear().type('zaidi');
    cy.get('#postal-code').clear().type('CF37');
  
    // Wait for 1 second 
    cy.wait(1000);
  
    // Click on the 'Continue' button.
    cy.get("#continue")
      .click();
  
    // Click on the 'Finish' button to complete the checkout.
    cy.get("#finish")
      .click();
  });
  
  
})