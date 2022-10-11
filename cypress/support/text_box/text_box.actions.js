Cypress.Commands.add('webPage',()=>{

    cy.visit('/')
})
Cypress.Commands.add('fullName',()=>{

    cy.get('#userName')
})

Cypress.Commands.add('email',()=>{

    cy.get('#userEmail')
})

Cypress.Commands.add('address',()=>{

    cy.get('#currentAddress')
})

Cypress.Commands.add('perAddress',()=>{

    cy.get('#permanentAddress')
})

Cypress.Commands.add('submitButton',()=>{

    cy.get('#submit')
})