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

  Scenario: I see a table
    Given I do nothing
    Then I should see a table with multiple rows

  Scenario Outline: I click links
    Given I do nothing
    When I press <linkOption>
    Then I should be directed to <site> in a new tab

    Examples:
    | linkOption | site                                  |
    | Google     | https://www.google.com/               |
    | Apple      | https://www.apple.com/                |
    | Samsung    | https://www.samsung.com/us/1/         |
