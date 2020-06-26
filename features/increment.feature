Feature: Increment number
	In order to do math
	As a developer
	I want to increment variables

	Scenario: increment by one
		Given a variable set to 1
		When I increment the variable by 1
		Then the variable should contain 2

	Scenario Outline: increment by any
		Given a variable set to <var>
		When I increment the variable by <increment>
		Then the variable should contain <result>

		Examples:
			| var | increment | result |
			| 100 | 5         | 105    |
			| 99  | 1234      | 1333   |
			| 12  | 5         | 17     |
