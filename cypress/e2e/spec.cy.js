import {LoginPage} from "../pageObjects/LoginPage.po"

describe('template spec', () => {
  const loginPage = new LoginPage();
  it('passes', () => {
    loginPage.visit();
    cy.wait(5000)
  })
})