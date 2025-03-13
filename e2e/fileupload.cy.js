describe('File Upload with Plugin', () => {
    it('should upload a file using cypress-file-upload', () => {
      cy.visit('https://practice.expandtesting.com/upload'); 
  
      
      cy.get('input[data-testid="file-input"]')
        .attachFile('example.json');
      cy.get('#fileSubmit').click();
    {delay :2000}
      
      cy.get('h1').should('contain', 'File Uploaded!');
      
    });
  });