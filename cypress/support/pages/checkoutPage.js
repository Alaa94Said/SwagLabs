class CheckoutPage {
  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  firstNameField() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameField() {
    return cy.get('[data-test="lastName"]');
  }

  postalCodeField() {
    return cy.get('[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('[data-test="continue"]');
  }

  finishButton() {
    return cy.get('[data-test="finish"]');
  }

  orderCompleteText() {
    return cy.get('.complete-header');
  }
}

module.exports = new CheckoutPage();
