describe('Register page test ', () => {
  it('Should show validation errors when leaving all fields blank', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="error-first-name"]').should('exist')
    cy.get('[data-cy="error-last-name"]').should('exist')
    cy.get('[data-cy="error-age"]').should('exist')
  })

  it('Should redirect user to a success page ', () => {
    cy.get('[data-cy="first-name-input"]').type('Badini')
    cy.get('[data-cy="last-name-input"]').type('Ibrahim')
    cy.get('[data-cy="age-input"]').type('25')
    cy.get('[data-cy="submit"]').click()
  })
})
