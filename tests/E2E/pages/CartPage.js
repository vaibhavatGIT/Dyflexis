class CartPage {
  constructor(page) {
    this.page = page;
  }

  get checkoutButton() {
    return this.page.locator('.academy-checkout-bug');
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;
