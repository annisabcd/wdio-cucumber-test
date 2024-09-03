@login
Feature: Login Feature

Background:
Given User is on login page

@tc-1 @positive
Scenario Outline: Success Login
  When User inputs "<username>" as username and "<password>" as password and clicks the login button
  Then User should be redirected to homepage

Examples:
| username    |  password    |
|visual_user  | secret_sauce |
|problem_user | secret_sauce |


@tc-2 @negative
Scenario Outline: Login with Wrong Username
  When User inputs "<username>" as username and "<password>" as password and clicks the login button
  Then User should see error message "Epic sadface: Username and password do not match any user in this service"

Examples:
| username     |  password    |
|visual_user1  | secret_sauce |
|problemn_user | secret_sauce |

@tc-3 @negative
Scenario Outline: Login with Wrong Password
  When User inputs "<username>" as username and "<password>" as password and clicks the login button
  Then User should see error message "Epic sadface: Username and password do not match any user in this service"

Examples:
| username    |  password     |
|visual_user  | secret_saucer |
|problem_user | secret_saucee |

@tc-4 @negative
Scenario Outline: Login with No Information
  When User inputs nothing but clicks the login button
  Then User should see error warning "Epic sadface: Username is required"


Examples:
| username    |  password     |
|             |               |   


