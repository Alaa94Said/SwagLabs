const loginPage = require('../support/pages/loginPage');
const inventoryPage = require('../support/pages/inventoryPage');
const users = require('../../../SwagLabs/cypress/fixtures/users.json');

describe('Cart & Add to cart', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.loginByUI(users.standard_user.username, users.standard_user.password);
  });

  it('adds an item to cart and verifies cart badge', () => {
    inventoryPage.addToCartButtonByName('Sauce Labs Backpack').click();
    inventoryPage.cartBadge().should('exist').and('contain', '1');
    inventoryPage.openCart();
    cy.get('.cart_item').should('have.length', 1);
    //cy.matchImageSnapshot('cart-page');
  });
});
