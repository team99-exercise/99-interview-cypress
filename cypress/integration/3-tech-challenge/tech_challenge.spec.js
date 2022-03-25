/// <reference types="cypress" />

// Welcome QA candidate! Good luck in writing your test script!

describe('99.co Home Page regression test', () => {
 // beforeEach(() => {
    //optional

    it("open 99 website",() => {

    cy.visit('https://www.99.co/');
    cy.url().should("include", "99")
  });

  it("test case 1 check H2 titles", () => {

    // Identify the H2 element class and then put an assertion to verify it contains the expected text.

    cy.get("h2._2tvJd._1TK5j").should("contain", "Featured projects")
    cy.get("h2._2tvJd._1TK5j").should("contain", "Popular projects")
    cy.get("h2.yMCxv._3oF8R._1vzK2").should("contain", "Find your property value instantly")
    cy.get("h2._2tvJd._1TK5j").should("contain", "Listings with videos")
    cy.get("h2._2tvJd._1TK5j").should("contain", "View these via video call")
    cy.get("h2._2tvJd._1TK5j").should("contain","Popular listings")
    cy.get("h2._2tvJd._1TK5j").should("contain", "Featured stories")
    cy.get("h2._2tvJd._1TK5j").should("contain", "Listings found only on 99")
    cy.get("h2.yMCxv.RNeWs._1vzK2").should("contain", "Latest New Launches")
    cy.get("h2._2tvJd._1TK5j").should("contain", "Explore 99.co")
    cy.get(".yMCxv._2n7JJ._1vzK2").should("contain", "Do more on the app.")
  
   
  });

  it("test case 2 check all links under popular projects", () => {

  // Identify each link using the elements , open the link & assert it opens it corrects using URL.
  
   cy.get('a[href*="condos-apartments/royal-hallmark"]').contains('Hallmark').click()

   cy.location('pathname').should("contain", "hallmark")
  
    cy.visit('https://www.99.co/');
    cy.get('a[href*="condos-apartments/the-watergardens-at-canberra"]').contains('Watergardens').click()
    cy.location('pathname').should("contain", "watergarden")

    cy.visit('https://www.99.co/');
    cy.get('a[href*="houses/belgravia-ace-deatP28CmAjqhAFM8J2igA2c"]').contains('Belgravia').click()
    cy.location('pathname').should("contain", "belgravia")

    cy.visit('https://www.99.co/');
    cy.get('a[href*="condos-apartments/the-arden"]').contains('Arden').click()
    cy.location('pathname').should("contain", "arden")
  
  });



  it("Teste case 3 - check filters for rent", () => {
    cy.visit('https://www.99.co/singapore/rent');
  
     //cy.get("label._3N6Qp").click()
     //cy.contains("search_category_rent").click()
      // cy.get("#search_category_rent").click()

      // cy.get('._3CoxL.OznyQ')
       //cy.get('._1mSEz._3tUEE._3H3Wz._3TR1e ').contains('$500').click();{force: true}
    

  });
  
}); 
