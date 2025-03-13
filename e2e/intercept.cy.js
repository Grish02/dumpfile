describe('intercept example',()=>{
    it('Testing API',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
   cy.intercept({
    path : '/posts'
   }).as('posts')

   cy.get("table:nth-of-type(1) a[href='/posts'").click()
   cy.wait('@posts').then(inter =>{
    console.log(JSON.stringify(inter))
    expect(inter.response.body).to.have.length(100)
   })
   
   
    })
})
it('Mocking with intercept with static response',()=>{
    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.intercept('GET','/posts',{totalpost:5 , name: 'navi'}).as('posts')
    cy.get("table:nth-of-type(1) a[href='/posts'").click()
    cy.wait('@posts')
})

it.only('Mocking with intercept with dynamic fixture',()=>{
    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.intercept('GET','/posts',{fixture: 'example.json'}).as('posts')
    cy.get("table:nth-of-type(1) a[href='/posts'").click()
    cy.wait('@posts')
})