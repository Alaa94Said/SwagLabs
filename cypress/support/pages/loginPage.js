class LoginPage {
  visit() {
    cy.visit('/');
  }

  usernameField() {
    return cy.get('#user-name');
  }

  passwordField() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('#login-button');
  }

  login(username, password) {
    this.usernameField().clear().type(username);
    this.passwordField().clear().type(password);
    this.loginButton().click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }
}

module.exports = new LoginPage();
