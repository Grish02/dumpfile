describe('Task Example - Write to a File', () => {
    it('should write content to a file', () => {
      const fileName = 'test.txt';
      const content = 'This is a test file content!';
  
      // Use cy.task() to call the custom writeToFile task
      cy.task('writeToFile', { fileName, content }).then(() => {
        // You can add additional assertions or logic here after the task completes
        cy.log('File has been written!');
      });
    });
  });