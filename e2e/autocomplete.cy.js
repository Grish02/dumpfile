describe('Autocomplete Test', () => {
    it('should select a city from autocomplete suggestions', () => {
      
      cy.visit('https://practice.expandtesting.com/autocomplete'); 
  
      
      const query = 'Ind';
      cy.get('.form-control')  
        .type(query);
  
      
      cy.get('#countryautocomplete-list')  
        .should('be.visible');  
  
      
      cy.get('#countryautocomplete-list > div:nth-child(1)')  
        .contains('India')  
        .click();
  
      
      cy.get('.form-control')  
        .should('have.value', 'India');  
    });
  });
  