describe('Mouseover',()=>{
    it('Mouse Demo',()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('#ui-id-4 > span:nth-child(2)').trigger('mouseover')
        cy.get('#ui-id-9').trigger('mouseover')
        cy.get('#ui-id-13').click()
    })
})