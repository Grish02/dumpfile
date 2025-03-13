describe("HTTP Requests",()=>{
  

    it("GET Call",()=>{
        cy.request('GET', 'https://reqres.in/api/users/2')
        .its('status')
        .should('equal',200);
        
    })

    it("Post Call",()=>{
         cy.request({
                method:'POST',
                url:'https://reqres.in/api/users',
                body:{
                     name: "nyra",
                     job: "leader"
                }
         })
         .its('status')
         .should('equal',201);

    })

       it("Put Call",()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                name: "ana",
                job: "diplomat"
            }
        })
        .its('status')
        .should('equal',200);
       })

       it("Delete Call",()=>{
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2'
        })
        .its('status')
        .should('equal',204);
       })
})