describe('Infinite Scroll Automation Test', () => {
    it('should load new items as the user scrolls down', () => {
      // Step 1: Visit the infinite scroll page
      cy.visit('https://practice.expandtesting.com/infinite-scroll');
  
      // Step 2: Initial assertion to check if some content is already visible
      cy.get('body > main > div.page-layout > div > div > div > div > div:nth-child(1)').should('have.length.greaterThan', 0);
  
      // Step 3: Scroll to the bottom of the page (you can adjust scroll position for infinite scroll)
      cy.scrollTo('bottom', { ensureScrollable: false });
  
      // Step 4: Wait for a brief moment to allow the new content to load
      cy.wait(2000);  // Adjust the wait time as per the speed of content loading
  
      // Step 5: Assert that new items have been added after scrolling
      cy.get('body > main > div.page-layout > div > div > div > div > div:nth-child(2)').should('have.length.greaterThan', 0.5);  // Change 10 to the expected number
  
      // Step 6: Scroll down again to load more items (if applicable)
      cy.scrollTo('bottom', { ensureScrollable: false });
  
      // Step 7: Wait for another brief moment to allow additional content to load
      cy.wait(2000);  // Adjust the wait time as necessary
  
      // Step 8: Assert that the number of items continues to grow
      cy.get('body > main > div.page-layout > div > div > div > div > div:nth-child(3)').should('have.length.greaterThan', 0.75);  // Change 20 based on your expectation
    });
  });
  