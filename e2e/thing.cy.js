describe('Magento Website Automation Tests', () => {
  
  // Before each test, visit the Magento homepage
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/');
  });

  it('should load the homepage and check if logo is visible', () => {
    // Check if the logo image is visible
    cy.get('img.logo').should('be.visible');
  });

  it('should search for a product', () => {
    // Type "Jacket" into the search box
    cy.get('input[name="q"]').type('Jacket');

    // Click the search button
    cy.get('button[type="submit"]').click();

    // Verify the search results contain the word "Jacket"
    cy.get('.product-items').should('contain.text', 'Jacket');
  });

  it('should add a product to the cart', () => {
    // Click on a category (for example, Women > Tops)
    cy.get('a[title="Women"]').trigger('mouseover');
    cy.contains('Tops').click();

    // Select the first product from the product list
    cy.get('.product-item').first().click();

    // Add the product to the cart
    cy.get('.action.tocart').click();

    // Verify that the product is added to the cart
    cy.get('.minicart-wrapper').should('contain.text', '1 item');
  });

  it('should navigate to the login page', () => {
    // Click on the 'Sign In' button
    cy.get('a[href*="customer/account/login"]').click();

    // Verify that the login form is visible
    cy.get('#email').should('be.visible');
    cy.get('#pass').should('be.visible');
  });

  it('should open and close the mobile menu', () => {
    // Click the mobile menu toggle (hamburger icon)
    cy.get('.mobile-menu-toggle').click();

    // Verify that the menu opens
    cy.get('.mobile-menu').should('be.visible');

    // Close the menu
    cy.get('.mobile-menu-toggle').click();

    // Verify that the menu closes
    cy.get('.mobile-menu').should('not.be.visible');
  });
});