describe("Parsing JSON Response",()=>{

    it.only("Parsing simple JSON resonpse",()=>{
        cy.request(
            {
                method: 'GET',
                url:"https://fakestoreapi.com/products",
            }
        )
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].price).to.equal(109.95)
            

        })
    })
})
let totalprice = null;
it("Parsing complex JSON resonpse",()=>{
    let totalprice;
    cy.request(
        {
            method: 'GET',
            url:"https://fakestoreapi.com/products",
            qs: {limit:2}
        }
    )
    .then((response)=>{
        expect(response.status).to.eq(200)
        response.body.forEach(element => {
            totalprice=totalprice+element.price;
        });
        expect(totalprice).to.equal(132.25);

    })
})