describe('File Download Test', () => {
    it('should download a file when the button is clicked', () => {
      const fileName = 'some-file.json'; 
      const downloadsFolder = Cypress.config('downloadsFolder'); 
  
      cy.visit('https://practice.expandtesting.com/download'); 
      
      cy.get('a[data-testid="some-file.json"]').click();
    
      cy.wait(2000); 
      
      cy.readFile(`${downloadsFolder}/${fileName}`).should('exist');
    });

    it('should download a file when the button is clicked', () => {
      const fileName = 'some-file.txt'; 
      const downloadsFolder = Cypress.config('downloadsFolder'); 
  
      cy.visit('https://practice.expandtesting.com/download'); 
      
      cy.get('div>a[data-testid="some-file.txt"]').click();
    
      cy.wait(2000); 
      
      cy.readFile(`${downloadsFolder}/${fileName}`).should('exist');
    });
  });