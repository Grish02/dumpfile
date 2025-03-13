describe('File Download Validation', () => {
    it('should download the same file multiple times and validate it', () => {
      
      cy.visit('https://practice.expandtesting.com/download'); 
      const fileName = 'some-file.txt'; 
  
      
      const downloadAndValidate = (downloadCount) => {
        cy.get('div>a[data-testid="some-file.txt"]').click(); 
  
        
        cy.wait(2000); 
  
        
        const downloadPath = `cypress/downloads/${fileName}`;
        
        cy.readFile(downloadPath).should('exist'); 
        cy.task('deleteFile', fileName);  

    
        cy.readFile(downloadPath).should('not.exist');
        
  
        //cy.log(`Downloaded the file ${downloadCount} times`);
      };
  
      
      for (let i = 1; i <= 5; i++) { 
        downloadAndValidate(i);
      }
    });
  });
  