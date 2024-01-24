# 99 Interview Cypress

This repo is created to provide the tech challenge for any QA candidates.

## How to set up

If you have issues, please go to [Cypress' Guide to Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) and follow the instructions provided in the documentation. The steps will differ depending on your OS. However, the steps below will generally work for Windows/Mac/Linux.

1. Install [NodeJs](https://nodejs.org/en/download/) & [npm](https://www.npmjs.com/get-npm) if you do not have them. You can check if you have them installed by running

   ```
   node --version
   npm --version
   ```

2. After ensuring you have NodeJs & npm installed, clone this repo into your intended directory, e.g.
   ```
   C:\Users\QACandidate\99-interview-cypress
   ```
3. From within the `99-interview-cypress` directory, run the command
   ```
   npm install
   ```

## How to use the Cypress test runner

All of the following information is documented in [Cypress/Core Concepts - The Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview).

1. Cypress runs tests in a unique interactive runner that allows you to see commands as they execute while also viewing the application under test.

2. To open the test runner, run the following command in your directory:
   ```
   npx cypress open
   ```
   There will be some text concerning your first time using Cypress if it opens successfully.

## Tech challenge rules

- Please code out your answers in
  ```
  cypress/e2e/WebSuite1.cy.js
  cypress/e2e/WebSuite2.cy.js
  cypress/e2e/WebSuite3.cy.js
  ```
- Do not use any 3rd party libraries or plugins for the tech challenge. The Cypress built-in library is sufficient to complete the task.
