Feature: Register forms

Scenario: fill in the required fields to test the happy path

Given I go to the forms
And fill in the fields
When I click in Register
Then the app must save my informations