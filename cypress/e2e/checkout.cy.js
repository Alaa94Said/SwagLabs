const loginPage = require('../support/pages/loginPage');
const inventoryPage = require('../support/pages/inventoryPage');
const checkoutPage = require('../support/pages/checkoutPage');
const users = require('../../../SwagLabs/cypress/fixtures/users.json');

describe('Checkout flow', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.loginByUI(users.standard_user.username, users.standard_user.password);
  });

  it('completes checkout for a single item', () => {
    inventoryPage.addToCartButtonByName('Sauce Labs Backpack').click();
    inventoryPage.openCart();
    checkoutPage.checkoutButton().click();

    checkoutPage.firstNameField().type('Lilly');
    checkoutPage.lastNameField().type('Tester');
    checkoutPage.postalCodeField().type('12345');
    checkoutPage.continueButton().click();
    checkoutPage.finishButton().click();

    //checkoutPage.orderCompleteText().should('contain', 'THANK YOU');
  });
});
