Feature: Filing persnal details

   Filing persnal details

   Scenario: Filing persnal details

        Given I go to website
        When I enter name & email
        And I enter address and personal address
        Then I click submit button
        And I see all data fill properly