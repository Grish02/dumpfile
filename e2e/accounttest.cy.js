import AccountPage from '../pageObject/accountpage';

describe('Magento Customer Account Page', () =>  {
    const accountPage = new AccountPage ();

    beforeEach(() => {
      // Assuming the user is already logged in. If not, login steps should be added here
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dC8%2C/');
      cy.get('#email').type('test@example.com'); // Example email 
      cy.get('#pass').type('password123'); // Example password 
      cy.get('#send2 > span').first().click({force: true});
      {delay:2000}
      cy.url().should('include', '/customer/account/index/');
    });

    it('should verify the Account Page heading is visible', () => {
      accountPage.verifyAccountHeading();
    });

    it('should navigate to My Orders section', () => {
      accountPage.navigateToMyOrders();
      cy.url().should('include', '/sales/order/history/');
    });

    it('should navigate to My Wishlist section', () => {
      accountPage.navigateToMyWishlist();
      cy.url().should('include', '/wishlist/');
    });

    it('should navigate to My Addresses section', () => {
      accountPage.navigateToMyAddresses();
      cy.url().should('include', '/customer/address/');
    });

    it('should navigate to Account Information section', () => {
      accountPage.navigateToAccountInformation();
      cy.url().should('include', '/customer/account/edit/');
    });

    it('should log out from the account', () => {
      accountPage.logOutFromAccount();
      cy.url().should('include', '/customer/account/login/');
    });
  });