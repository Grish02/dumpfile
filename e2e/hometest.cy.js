import HomePage from '../pageObject/homepage';

describe('Magento Home Page', () => {
   const homePage = new HomePage();

    beforeEach(() => {
      homePage.visit();
    });

     it('should verify the Heading is visible', () => {
        homePage.verifyHeading();
      });

      it('should verify the Dashboard is visible', () => {
        homePage.verifyDashboard();
      });

      it('should navigate to sign in page', () => {
        homePage.navigateToSignIn();
        cy.url().should('include','customer/account/login/');
      });

      it('should navigate to account page', () => {
        homePage.navigateToCreateAccount();
        cy.url().should('include','/customer/account/create/');
      });

     // it('should navigate to shopping cart page', () => {
      //  homePage.navigateToShoppingCart();
      //  cy.url().should('include','customer/account/login/');
     // });
     it('should navigate to whats new page', () => {
        homePage.navigateToWhatsNew()
        cy.url().should('include','/what-is-new.html');
      });

      it('should navigate to womens page', () => {
        homePage.navigateToWomenSection();
        cy.url().should('include','/women.html');
      });

      it('should navigate to men page', () => {
        homePage.navigateToMenSection();
        cy.url().should('include','/men.html');
      });

      it('should navigate to gear page', () => {
        homePage.navigateToGearSection();
        cy.url().should('include','/gear.html');
      });

      it('should navigate to training page', () => {
        homePage.navigateToTrainingSection();
        cy.url().should('include','/training.html');
      });

      it('should navigate to sales page', () => {
        homePage.navigateToSaleSection();
        cy.url().should('include','/sale.html');
      });


    

















})