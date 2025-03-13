describe("API Testing",()=>{
     
    it("Passing Query parameters",()=>{
            cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            qs: { page: 2}
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.page).equal(2);
            expect(response.body.data).has.length(6);
            expect(response.body.data[0]).have.property('id',7);
        })
    })
})