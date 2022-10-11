

Given(/^I go to website$/, () => {
	cy.webPage('/')
});

When(/^I enter name & email$/, () => {
	cy.fullName().type('Anup Deshmane')
    //cy.wait(2000)
    cy.email().type('anup100@yopmail.com')
});

When(/^I enter address and personal address$/, () => {
cy.address().type('At Post Vairag, Tal Barshi Dist Solapur')
cy.perAddress().type('At Post Vairag, Tal Barshi Dist Solapur')
});

Then(/^I click submit button$/, () => {
	cy.submitButton().click()
});

Then(/^I see all data fill properly$/, () => {
	return true;
});
