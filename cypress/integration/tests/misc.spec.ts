/// <reference types="cypress" />

 it('.should make an assertion about the current subject', () => {
    cy.visit('https://example.cypress.io/commands/assertions')
    cy.get('.assertion-table')
  .find('tbody tr:last').should('have.class', 'success')
  .find('td')
  .first()
  // checking the text of the  element in various ways
  .should('have.text', 'Column content')
  .should('contain', 'Column content')
  .should('have.html', 'Column content')
  // chai-jquery uses "is()" to check if element matches selector
  .should('match', 'td')
  })

  it('.should wrap a method in a spy', () => {
    const obj = {
      foo () {},
    }
    
    const spy = cy.spy(obj, 'foo').as('anyArgs')
    
    obj.foo()
    
    expect(spy).to.be.calledOnce
  })

  it('.should create a stub', () => {
    let obj = {
      foo () {},
    }
    
    const stub = cy.stub(obj, 'foo').as('foo')
    
    obj.foo()
    
    expect(stub).to.be.called
  })


