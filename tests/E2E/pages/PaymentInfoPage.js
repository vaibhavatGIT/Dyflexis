class PaymentInfoPage {
  constructor(page) {
    this.page = page;
  }

  get continueToPayment() {
    return this.page.locator('.ec_cart_button_shipping_next');
  }

  async clickOnContinueToPayment() {
    await this.continueToPayment.click();
  }
}

module.exports = PaymentInfoPage;
