# Project Structure

## The project is structured as follows:

- **.github/workflows**: GHA workflows
  - **main.yml**: Tests will run on push or pull request on branch master. The workflow will install all dependencies, install Playwright and then run the tests. It will also create the HTML report.

- **tests/API/**: This directory contains API test.
  - **api.test.js**: Contains all the API tests.

- **tests/E2E/config/**: This directory contains configuration files.
  - **testData.js**: Contains test data used across the tests.

- **tests/E2E/pages/**: This directory contains Page Object Model (POM) classes. Contains methods and properties specific to the page.
  - **CartPage.js**
  - **CheckoutInfoPage.js**
  - **HomePage.js**
  - **PaymentCheckoutPage.js**
  - **PaymentInfoPage.js**

- **tests/E2E/**: This directory contains test files.
  - **academybugs.spec.js**: Contains all the positive and negative test cases