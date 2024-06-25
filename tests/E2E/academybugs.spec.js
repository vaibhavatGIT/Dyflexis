const { test } = require('@playwright/test');
const HomePage = require('./pages/HomePage');
const CartPage = require('./pages/CartPage');
const CheckoutInfoPage = require('./pages/CheckoutInfoPage');
const PaymentInfoPage = require('./pages/PaymentInfoPage');
const PaymentCheckoutPage = require('./pages/PaymentCheckoutPage');

let homePage;
let cartPage;
let checkoutInfoPage;
let paymentInfoPage;
let paymentCheckoutPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  cartPage = new CartPage(page);
  checkoutInfoPage = new CheckoutInfoPage(page);
  paymentInfoPage = new PaymentInfoPage(page);
  paymentCheckoutPage = new PaymentCheckoutPage(page);
  await homePage.open();
});

test.describe("Should have essential components and functionalities", () => {

  // Positive Tests
  test("should have header title and header list visible on the page", async () => {
    await homePage.verifyTitleText();
    await homePage.verifyHeaderList();
  });

  test("should have title, amount, add to cart button visible for each product", async () => {
    await homePage.verifyAllProductList();
  });

  test("should be able to sort the order and verify the size of the product remains the same", async () => {
    await homePage.selectAndVerifySortOrder('Best Rating');
  });

  test("should be able to checkout, fill billing address, and buy the product", async () => {
    await homePage.addToCheckout();
    await cartPage.clickCheckoutButton();
    await checkoutInfoPage.fillBillingInfo();
    await checkoutInfoPage.clickOnCheckout();
    await paymentInfoPage.clickOnContinueToPayment();
    await paymentCheckoutPage.clickOnSubmitOrder();
    await paymentCheckoutPage.verifyFinalMessage();
  });

  // Negative Tests
  test("should be able to verify error messages in the billing page", async () => {
    await homePage.addToCheckout();
    await cartPage.clickCheckoutButton();
    await checkoutInfoPage.clickOnCheckout();
    await checkoutInfoPage.verifyAllErrorMessages();
  });
});
