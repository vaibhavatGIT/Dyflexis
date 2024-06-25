# Test Scenarios in Gherkin


### Feature: Application UI Functionality

As a user, I want to verify the functionality of the home page, including sorting, pagination, adding products to the cart, and the footer UI.

  ### Scenario: Verifying sorting order functionality
    Given I am on the home page of the application
    When I change the sort method from `Default Sorting` to `Best Rating`
    Then the products should be updated accordingly
    And the count of the products remains the same

  ### Scenario: Verify Pagination functionality
    Given I am on the home page of the application
    When I change the pagination view from 25 to X
    Then the products should be updated accordingly
    And the number of products should be displayed on the top as "Showing all x results"

  ### Scenario: Verify Footer functionality
    Given I am on the home page of the application
    Then the footer section should be visible with 2 links: Terms and Conditions, Privacy Policy
    
    When I click on "Terms and Conditions" link
    Then I should land on "https://www.utest.com/terms-and-conditions"
    
    When I click on "Privacy Policy" link
    Then I should land to "https://www.utest.com/privacy-policy" on the same page

### Feature: Shopping Cart

  ## Scenario: Verify Add to Cart functionality
    Given I am on the home page displaying the product catalog
    When I click the "Add to Cart" button for a product
    Then I should see a banner flash with text "Successfully Added to your shopping cart"
    And I should also see a green button with text "Checkout Now"

  ## Scenario: Verify Checkout functionality
    Given I am on the home page displaying the product catalog
    When I click on the "Checkout Now" button after adding a product to the cart
    Then I should navigate to screen "https://academybugs.com/my-cart/"
    And I should see the same item available in the checkout screen with Cart Subtotal, Shipping, and Grand Total
    And the Cart Subtotal amount should be the same as displayed in the home page

  ## Scenario: Verify Increase/Decrease functionality of item quantity on the checkout screen
    Given I already have items in my shopping cart
    When I click on the '+' icon to increase the number of articles
    Then the count of articles should increase and be visible on the screen
    When I click on the '-' icon to decrease the number of articles
    Then the count of articles should decrease and be visible on the screen
    And I can't decrease the count below 1 article
    When I click on the 'UPDATE' button
    Then the amount of the articles should be updated according to the number of articles

  ## Scenario: Verify remove article functionality
    Given I have items in my shopping cart
    When I click the remove 'X' button preceding the item
    Then the item should be removed from the cart
    And the price should be updated accordingly


## Feature: Billing Information

### Scenario: Entering valid billing information
    Given I am on the billing info page after successfully checking out items from the cart
    Then I should see the URL as "https://academybugs.com/my-cart/?ec_page=checkout_info"
    And I should see Billing Information Section with fields: Country, First Name, Last Name, Company, Address, City, State, Zip Code, Phone Number
    And I should also see a section for Email with fields: Email and Retype Email


### Scenario: Verify all the required field error messages in billing info page
    Given I am on the billing info page after successfully checking out items from the cart
    When I click on the "CONTINUE TO PAYMENT" button without entering any data
    Then I should see 9 error messages for mandatory fields
    And I should see the country error message as "Please select your Country"
    And I should see the first name error message as "Please enter your First Name"
    And I should see the last name error message as "Please enter your Last Name"
    And I should see the address error message as "Please enter your Address"
    And I should see the city error message as "Please enter your City"
    And I should see the zip code error message as "Please enter your Zip Code"
    And I should see the phone number error message as "Please enter your Phone"
    And I should see the email error message as "Please enter a valid Email"
    And I should see the checkout error message as "Please correct the errors in your checkout details"

  ### Scenario: Verify country field and state field should be in sync
      Given I am on the billing info page after successfully checking out items from the cart
      When I enter a valid country name, for example, "India"
      Then I should see corresponding states based on the country selected, for example, the 28 states of India

 
## Feature: Shipping Information

### Scenario: Verify all shipping method options available in Shipping Page
    Given I am on the shipping info page after successfully checking out items from the cart and adding billing info
    Then I should navigate to "https://academybugs.com/my-cart/?ec_page=checkout_shipping"
    And I should see multiple shipping options:
      - "Standard Shipping 7-10 Days"
      - "In-Store Pickup"
      - "Priority 3 Day Shipping"
      - "Ground Delivery 5-7 Days"
      - "Priority 2 Day Shipping"
      - "Next Day Air (1 Day)"
    And all the options should have the corresponding amount mentioned


### Scenario: Verify after selecting any shipping option the grand total should be reflected successfully
    Given I am on the shipping info page
    When I select "Standard Shipping 7-10 Days"
    And I click on "Continue to payment"
    Then the Shipping cost on the order detail section should be updated accordingly
    And I should be redirected to the payment page

## Feature: Payment

### Scenario: Verifying by default Direct Deposit payment option selected
    Given I am on the payment page
    Then I navigate to "https://academybugs.com/my-cart/?ec_page=checkout_payment"
    And I should see "Pay by Direct Deposit" selected by default

### Scenario: Verify pop up after submitting order
    Given I am on the payment page
    When I enter invalid payment information
    And I click on "Submit order"
    Then I should see a pop up with text "Not a real order"
