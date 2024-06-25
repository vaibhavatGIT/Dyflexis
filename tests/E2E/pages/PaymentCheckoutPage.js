const { expect } = require('@playwright/test');
class PaymentCheckoutPage {
  constructor(page) {
    this.page = page;
  }

  get submitOrder() {
    return this.page.locator("#ec_cart_submit_order");
  }

  get popupText() {
    return this.page.locator(".active.custom-position h5");
  }

  async clickOnSubmitOrder() {
    await this.submitOrder.click();
  }

  async verifyFinalMessage() {
    await expect(this.popupText).toHaveText("Not a real order");
  }
}

module.exports = PaymentCheckoutPage;
