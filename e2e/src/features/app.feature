Feature: Go to Home Page
  Display the title

#  Background: I am on the home page

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: I click Display Text
    Given I am on the home page
    When I click the Display Text button
    Then I should see Hi there!
