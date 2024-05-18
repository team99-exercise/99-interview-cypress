/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 2", () => {
  const blog_title = 'Blog';
  const blogs = [
    { selector: 'a[title="5 Creative and Budget-Friendly DIY Dog Toys"]', title: '5 Creative and Budget-Friendly DIY Dog Toys' },
    { selector: 'a[title="King Charles Cavalier | Dog Breed Information"]', title: 'King Charles Cavalier | Dog Breed Information' },
    { selector: 'a[title="Dalmatian | Dog Breed Information"]', title: 'Dalmatian | Dog Breed Information' }
  ];

  beforeEach(() => {
    // Handle uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      // Ignore the error and prevent Cypress from failing the test
      if (err.message.includes('s is not defined')) {
        return false;
      }
      // Allow other errors to fail the test
      return true;
    });

    // Visit the website before each test
    cy.visit('https://www.pawshake.com.sg/');
  });

  it("Test Case 1: Check all blog", () => {
    // Ensure the blog section with the title exists
    cy.contains('h2', blog_title).scrollIntoView().should('be.visible').wait(500);

    // Iterate over each blog link and verify
    blogs.forEach(blog => {
      // Click on each blog link
      cy.get(blog.selector).should('be.visible').click();

      // Ensure the blog post title exists
      cy.contains('h1', blog.title).should('be.visible');

      // Go back to the blog list
      cy.go('back');

      // Ensure the blog section with the title exists before next iteration
      cy.contains('h2', blog_title).scrollIntoView().should('be.visible').wait(500);
    });
  });

  it("Test Case 2", () => {
    //Optional
  });

  it("Test Case 3", () => {
    //Optional
  });
});
