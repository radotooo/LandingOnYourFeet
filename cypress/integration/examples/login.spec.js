/// <reference types="cypress" />

describe('Login/Form', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('be visible', () => {
    cy.get('[data-cy=login-form]');
  });

  it('title be equal to "Account Login"', () => {
    cy.get('[data-cy=login-form]')
      .find('.form-box-title')
      .contains('Account Login');
  });

  it('should have at least 2 input fields', () => {
    cy.get('[data-cy=login-form]')
      .find('input')
      .should('have.length.at.least', 2);
  });

  it('should have a register button', () => {
    cy.get('button').contains('Register');
  });
});

describe('Register/Form', () => {
  it('be visible', () => {
    cy.visit('');
    cy.get('[data-cy=login-form]').then(() => {
      cy.get('.tab-switch-button')
        .contains('Register')
        .click()
        .then('[data-cy=registerr-from]')
        .should('be.visible');
    });
  });
});
