
Given(/^User click toggle button Home$/, () => {
cy.visit('https://demoqa.com/checkbox')
cy.get('#item-1').click()
    cy.get('.rct-icon.rct-icon-expand-close').click()
});

Given(/^User click notes in Desktop and Download$/, () => {

    cy.xpath('(//*[@class="rct-icon rct-icon-uncheck"])[2]').should('exist').and('be.visible').click()
    cy.get('#tree-node-downloads').click()

});


	





