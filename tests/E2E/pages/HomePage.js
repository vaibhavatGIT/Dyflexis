const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  get title() {
    return this.page.locator('.sq-site-title > a');
  }

  get headerList() {
    return this.page.locator('#menu-primary-menu > li');
  }

  get getProductList() {
    return this.page.locator('#ec_store_product_list > li');
  }

  get sortOrder() {
    return this.page.locator('#sortfield');
  }

  async open() {
    const url = 'https://academybugs.com/find-bugs/#';
    await this.page.goto(url);
  }

  async verifyTitleText() {
    const titleElement = await this.title;
    await expect(titleElement).toBeVisible();
    await expect(titleElement).toHaveText('AcademyBugs.com');
  }

  async verifyHeaderList() {
    await expect(this.headerList).toHaveCount(5);
  }

  async verifyAllProductList() {
    const productList = await this.page.locator('#ec_store_product_list > li');
    const productCount = await productList.count();
    for (let i = 0; i < productCount; i++) {
      const productLocator = productList.nth(i);
      await expect(productLocator).toBeVisible();
      const productTitle = await productLocator.locator('h3.ec_product_title_type1').textContent();
      expect(productTitle.trim()).not.toBe('');
    }
  }

  async selectAndVerifySortOrder(sortOrder) {
    await this.sortOrder.selectOption(sortOrder);
    await expect(this.page).toHaveURL(/\/\?filternum/);
    await expect(this.sortOrder).toHaveText(/Best Rating/);
    await expect(this.sortOrder).toBeVisible();
    await expect(this.getProductList).toHaveCount(18);
  }

  async addToCheckout() {
    const firstProduct = this.getProductList.nth(0);
    await firstProduct.locator('a[id^="ec_add_to_cart_"]').nth(1).click();
    await firstProduct.locator('.ec_added_to_cart_button').nth(1).click();
  }
}

module.exports = HomePage;
