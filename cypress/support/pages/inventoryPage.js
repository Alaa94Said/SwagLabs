class InventoryPage {
  productLabel() {
    return cy.get('.inventory_list');
  }

  addToCartButtonByName(name) {
    return cy.contains('.inventory_item', name).find('button');
  }

  cartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }

  openProduct(name) {
    cy.contains('.inventory_item', name).find('a').click();
  }
}

module.exports = new InventoryPage();
