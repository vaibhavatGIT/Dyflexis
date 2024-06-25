
# Description

This project contains End-to-End (E2E) and API tests using Playwright. 
### The project is structured as follows:

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

## Getting Started

To get started with this project, follow these steps:

1. **Install dependencies**:
    ```sh
    npm install
    ```

2. **Run all tests**:
    ```sh
    npm run test:pw
    ```

3. **Run API tests**:
    ```sh
    npm run test:pw:api
    ```

4. **Run E2E tests**:
    ```sh
    npm run test:pw:e2e
    ```

## Quick Links

- **[Process Questions](./PROCESS.md)**
- **[Test Scenarios](./TESTSCENARIOS.md)**


