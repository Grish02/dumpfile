describe('Drag and Drop with Real Events', () => {
    it('should drag and drop an element', () => {
      cy.visit('https://commitquality.com/practice-drag-and-drop');
      cy.get('.small-box')
      .drag('.large-box')
      .then ((sucess) => {
       assert.isTrue(sucess);
      });
    });
  })