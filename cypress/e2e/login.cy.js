const loginPage = require('../support/pages/loginPage');
const users = require('../../../SwagLabs/cypress/fixtures/users.json');

describe('Login flow', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('logs in successfully with standard_user', () => {
    //cy.allure().label('owner', 'qc-team');
   // cy.allure().feature('Login');
    cy.loginByUI(users.standard_user.username, users.standard_user.password);
    cy.get('.title').should('contain', 'Products');
    // simple visual snapshot of the inventory page
    //cy.matchImageSnapshot('inventory-page');
  });

  // it('shows error for locked_out_user', () => {
  //   cy.loginByUI(users.locked_user.username, users.locked_user.password);
  //   loginPage.errorMessage().should('be.visible').and('contain', 'locked');
  // });
});
