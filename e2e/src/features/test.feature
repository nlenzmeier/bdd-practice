#features/test.feature
Feature: Go to Home Page
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title
