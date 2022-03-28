/// <reference types="cypress" />

// Welcome QA candidate! Good luck in writing your test script!

describe('99.co Home Page regression test', () => {
  beforeEach(() => {
    //optional
  })

    const min = 500;
    const max = 5000;

    it('Check All H2 titles', function() 
    
    {
      cy.visit('https://www.99.co/')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Featured Projects')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Popular Projects')
      cy.scrollTo(0, 100)
      cy.get('h2.yMCxv _3oF8R _1vzK2').contains('Find your property value instantly')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Listings with videos')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('View these via video call')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Popular listings')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Featured stories')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Listings found only on 99')})
      cy.scrollTo(0, 100)
      cy.get('h2.yMCxv _3oF8R _1vzK2').contains('Latest New Launches')
      cy.scrollTo(0, 100)
      cy.get('h2._2tvJd._1TK5j').contains('Explore 99.co')
      cy.scrollTo(0, 100)
      cy.get('h2.yMCxv _2n7JJ _1vzK2').contains('Do more on the app')
      cy.scrollTo(0, 100)

    })

    it('Check All the links under popular projects', function() 
    
    {
      cy.visit('https://www.99.co/')
      cy.contains('The Watergardens At Canberra').click()
      cy.go('back')
      cy.contains('Belgravia Ace').click()
      cy.go('back')
      cy.contains('Royal Hallmark').click()
      cy.go('back')
      cy.contains('The Arden').click()


    })

    it('Check All the filters under title RENT', function() 
    
    {
      cy.visit('https://www.99.co/')
      cy.get('[for=search_category_rent]').click()

      cy.contains('Price range').click()

      
      cy.get('input._3CoxL').click().type(min)
      cy.wait(100)
      cy.get('input.Ow5IS').click().type(max)
      cy.wait(200)
      cy.get('div._3RccJ').contains('Property type').click()
      cy.wait(50)
      cy.get('input[type="checkbox"]').contains('Condo').check()

      cy.get('div._3RccJ').contains('Bedrooms').click()
      cy.wait(50)
      cy.get('input[type="checkbox"]').contains('Studio').check()

      cy.get('div._2HSCz').contains('Rental type').click()
      cy.wait(50)
      cy.get('input[type="checkbox"]').contains('All rooms').check()

      cy.get('//*[@id="appContent"]/div/div/div[1]/div[5]/div/form/div[2]/button/span/span[1]/span').click()


      

    })

    

})
