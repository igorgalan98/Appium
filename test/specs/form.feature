Feature: Register forms

Scenario: fill in the required fields to test the happy path

Given I access forms

When I type the <email>
And select the <text>
Then must show the confirmation <message>