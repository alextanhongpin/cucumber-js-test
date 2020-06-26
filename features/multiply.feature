Feature: Multiply feature
	In order to do hard math
	As a developer
	I want to multiply variables

	Scenario: multiply by one
		Given a variable set to 1
		When I multiply the variable by 1
		Then the variable should contain 1

	Scenario Outline: multiply by any
		Given a variable set to <var>
		When I multiply the variable by <multiply>
		Then the variable should contain <result>

		Examples:
			| var | multiply  | result |
			| 100 | 5         | 500    |
			| 99  | 1234      | 122166 |
			| 12  | 5         | 60     |
