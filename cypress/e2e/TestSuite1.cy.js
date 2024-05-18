/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", () => {
  const titles = [
    'Who treats your pet like family',
    "Here's how Pawshake works.",
    'Happiness guaranteed',
    'Services on Pawshake',
    'Why choose Pawshake?',
    'Always stay connected',
    'Blog',
    'Frequently asked questions',
    'Learn More',
    'Popular Cities',
    'About Pawshake',
    'Payment Methods',
    'Find us on'
  ];

  beforeEach(() => {
    //Optional
    cy.visit('https://www.pawshake.com.sg/');
  });

  it("Test Case 1: Check H2 titles", () => {
    //Write your automation script here for Test Case 1
    titles.forEach(title => {
      cy.contains('h2', title).should('exist').scrollIntoView();
    });
  });

  it("Test Case 2", () => {
    //Optional
  });

  it("Test Case 3", () => {
    //Optional
  });
});
