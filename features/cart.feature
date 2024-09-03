@Cart
Feature: Add to Cart

Background:
Given User is on login page
When User inputs "visual_user" as username and "secret_sauce" as password and clicks the login button

@tc-5
Scenario Outline: Add one Item to Cart
  And User click Add to Cart button
  Then the Item will be Add to Cart
  

