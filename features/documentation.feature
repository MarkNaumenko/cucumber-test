Feature: Visiting onliner
    As a user of onliner.by
    I want to check iphone's specs
    So that I will be satisfied

Scenario: visit onliner.by
    Given I am on the Onliner.by web site
    Then I click on "Search field"
    Then I input "Apple iPhone 6s 16GB Silver"
    Then I should go to a market page