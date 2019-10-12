describe('cypress Getting Started', () =>{
    it('do nothing', ()=>{
        expect(true).to.equal(true)
    })

    it('visit example website', ()=>{
        cy.visit('https://example.cypress.io')

        cy.contains('Kitchen Sink')

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@gmail.com')
            .should('have.value','fake@gmail.com')

        cy.get('.action-form').submit()
            .next().should('contain', 'Your form has been submitted!')
    })
})