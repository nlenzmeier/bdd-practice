Feature: Go to Home Page
  Display the title

  Background:
    Given I am on the home page

  Scenario: Home Page
    Given I do nothing
    Then I should see the title

  Scenario: I click Display Text
    Given I click the Display Text button
    Then I should see Hi there!

  Scenario:
    Given I do nothing
    Then I should see a table with multiple rows

