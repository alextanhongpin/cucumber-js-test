Feature: number history
	As an array,
	I want to store array,
	In order to process them

	Scenario: add number to array
		Given that I add 5 to the array
		When getting the last item
		Then the number should be 5
