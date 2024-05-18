/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 3", () => {
  beforeEach(() => {
    // Visit the Pawshake website before each test
    cy.visit('https://www.pawshake.com.sg/');
  });

  it("Test Case 1: Check search results", () => {
    // Click on the dropdown to select the option
    cy.get('button[role="combobox"]').click();
    // Select a specific option (e.g., 'Home Visits')
    cy.get('b').contains('Home Visits').click();

    // Enter the location 'One-north' in the Near field
    cy.get('input[placeholder="Your street name"]').type('One-north');
    // Wait for the location suggestions to appear and select the first one
    cy.get('li#ex-list-item-0[role="option"][aria-selected="true"]').contains('One-north Crescent').click();

    // Assume the date picker opens and we select a start and end date
    cy.get('div').contains('Choose date range').click();
    cy.get('button.rdp-button[name="day"][type="button"]:not([disabled])').contains('20').click();
    cy.get('button.rdp-button[name="day"][type="button"]:not([disabled])').contains('21').click();
    cy.get('button').contains('Apply days').click();

    // Extract the values of the date elements
    cy.get('input[placeholder="Pick a date"][role="combobox"]').invoke('val').as('date');

    // Submit the search form
    cy.get('button').contains('Search now').click();

    // Verify that search results are displayed
    cy.get('span').contains('sitters for "Home Visits"').should('be.visible');
    cy.get('input[placeholder="Select location"][role="combobox"]').should('have.value', 'One-north Crescent, Singapore');

    
    // Assert against the values extracted from the elements
    cy.get('@date').then(date => {
      cy.get('input[placeholder="Pick a date"][role="combobox"]').should('have.value', date);
    });
  });

  it("Test Case 2", () => {
    //Optional
  });
  
  it("Test Case 3", () => {
    //Optional
  });
});
