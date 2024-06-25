const testData = require("../config/testData");
const { expect } = require('@playwright/test');

class CheckoutInfoPage {
  constructor(page) {
    this.page = page;
  }

  get billingCountrySelect() {
    return this.page.locator("#ec_cart_billing_country");
  }

  get billingFirstNameInput() {
    return this.page.locator("#ec_cart_billing_first_name");
  }

  get billingLastNameInput() {
    return this.page.locator("#ec_cart_billing_last_name");
  }

  get billingCompanyNameInput() {
    return this.page.locator("#ec_cart_billing_company_name");
  }

  get billingAddressInput() {
    return this.page.locator("#ec_cart_billing_address");
  }

  get billingCityInput() {
    return this.page.locator("#ec_cart_billing_city");
  }

  get billingStateSelect() {
    return this.page.locator("#ec_cart_billing_state_IN");
  }

  get billingZipInput() {
    return this.page.locator("#ec_cart_billing_zip");
  }

  get billingPhoneInput() {
    return this.page.locator("#ec_cart_billing_phone");
  }

  get emailInput() {
    return this.page.locator("#ec_contact_email");
  }

  get retypeEmailInput() {
    return this.page.locator("#ec_contact_email_retype");
  }

  get continueToShippingButton() {
    return this.page.locator(".ec_checkout_details_submit");
  }

  get getCountryErrorMessage() {
    return this.page.locator("#ec_cart_billing_country_error");
  }

  get getFirstNameErrorMessage() {
    return this.page.locator("#ec_cart_billing_first_name_error");
  }

  get getLastNameErrorMessage() {
    return this.page.locator("#ec_cart_billing_last_name_error");
  }

  get getAddressErrorMessage() {
    return this.page.locator("#ec_cart_billing_address_error");
  }

  get getCityErrorMessage() {
    return this.page.locator("#ec_cart_billing_city_error");
  }

  get getZipCodeErrorMessage() {
    return this.page.locator("#ec_cart_billing_zip_error");
  }

  get getPhoneNumberErrorMessage() {
    return this.page.locator("#ec_cart_billing_phone_error");
  }

  get getEmailErrorMessage() {
    return this.page.locator("#ec_contact_email_error");
  }

  get getCheckoutErrorMessage() {
    return this.page.locator("#ec_checkout2_error");
  }

  async fillBillingInfo() {
    await this.billingCountrySelect.selectOption(testData.billingaddress.country);
    await this.billingFirstNameInput.type(testData.billingaddress.firstName);
    await this.billingLastNameInput.type(testData.billingaddress.lastName);
    await this.billingCompanyNameInput.type(testData.billingaddress.companyName);
    await this.billingAddressInput.type(testData.billingaddress.address);
    await this.billingCityInput.type(testData.billingaddress.city);
    await this.billingStateSelect.selectOption(testData.billingaddress.state);
    await this.billingZipInput.type(testData.billingaddress.zip);
    await this.billingPhoneInput.type(testData.billingaddress.phone);
    await this.emailInput.type(testData.billingaddress.email);
    await this.retypeEmailInput.type(testData.billingaddress.email);
  }

  async clickOnCheckout() {
    await this.continueToShippingButton.first().click();
  }

  async verifyAllErrorMessages() {
    await expect(this.getCountryErrorMessage).toHaveText(testData.errormessage.countryErrorMessage);
    await expect(this.getFirstNameErrorMessage).toHaveText(testData.errormessage.firstNameErrorMessage);
    await expect(this.getLastNameErrorMessage).toHaveText(testData.errormessage.lastNameErrorMessage);
    await expect(this.getAddressErrorMessage).toHaveText(testData.errormessage.addressErrorMessage);
    await expect(this.getCityErrorMessage).toHaveText(testData.errormessage.cityErrorMessage);
    await expect(this.getZipCodeErrorMessage).toHaveText(testData.errormessage.zipCodeErrorMessage);
    await expect(this.getPhoneNumberErrorMessage).toHaveText(testData.errormessage.phoneErrorMessage);
    await expect(this.getEmailErrorMessage).toHaveText(testData.errormessage.emailErrrorMessage);
    await expect(this.getCheckoutErrorMessage).toHaveText(testData.errormessage.checkoutErrorMessage);
  }
}

module.exports = CheckoutInfoPage;
