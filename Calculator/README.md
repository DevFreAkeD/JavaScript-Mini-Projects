# Simple Calculator
## Get Stared
This project is a simple web-based calculator implemented using JavaScript. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The interface consists of a display area and buttons for digits (0-9), decimal point, arithmetic operators (+, -, *, /), and clear (C).

## Features
- **Basic Arithmetic Operations:** Perform addition, subtraction, multiplication, and division.
- **Clear Functionality:** Reset the current input, operator, and operands.
- **Chaining Calculations:** Use the result of one calculation as the starting point for the next.
- **Decimal Point:** Perform calculations with decimal numbers.

## Files
- `index.html`: The HTML file that sets up the structure of the calculator.
- `script.js`: The JavaScript file containing the logic for the calculator.

## Usage
1. Open `index.html` in a web browser: This will display the calculator interface.
2.  Click the buttons:
  - Digits (0-9) and decimal point (.) will be appended to the current input.
  - Operators (+, -, *, /) will set the operation to be performed.
  - The equals sign (=) will compute and display the result.
  - The clear button (C) will reset the calculator.
  
## JavaScript Code Explanation
The core functionality of the calculator is implemented in `script.js`

## Event Listener for DOMContentLoaded
The DOMContentLoaded event ensures that the script runs after the HTML content is fully loaded.
`document.addEventListener('DOMContentLoaded', () => {`

### Variables
- `display`: The element where the input/output is shown.
- `buttons`: All the buttons on the calculator.
- `currentInput`: The current input value being typed.
- `operator`: The operator currently selected (+, -, *, /).
- `firstOperand`: The first operand before an operator is pressed.

### Event Listener for Buttons
Each button on the calculator has an event listener that performs actions based on the button's value.
`buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        console.log('Clicked button value:', value);
`
        
### Handling Digits and Decimal Point
If the button value is a digit (0-9) or a decimal point (.):
- Append the value to currentInput.
- Update the display.
`        if (value >= '0' && value <= '9' || value === '.') {
            currentInput += value;
            display.value = currentInput;
`
  
### Handling Clear
If the button value is 'C':

- Reset currentInput, operator, and firstOperand.
- Clear the display.
`        } else if (value === 'c') {
            currentInput = '';
            operator = null;
            firstOperand = null;
            display.value = '';
`
  
Handling Equals
If the button value is '=':

- Perform the calculation based on the operator and operands.
- Update the display with the result.
- Set the result as firstOperand for further calculations.
`        } else if (value === '=') {
            if (operator && firstOperand !== null) {
                const secondOperand = parseFloat(currentInput);
                currentInput = '';
                let result;

                switch (operator) {
                    case '+':
                        result = firstOperand + secondOperand;
                        break;
                    case '-':
                        result = firstOperand - secondOperand;
                        break;
                    case '*':
                        result = firstOperand * secondOperand;
                        break;
                    case '/':
                        result = firstOperand / secondOperand;
                        break;
                }

                display.value = result;
                firstOperand = result;
                operator = null;
            }
`

###Handling Operators
If the button value is an operator (+, -, *, /):

- Set the first operand.
- Set the operator.
- Reset currentInput for the next number.
`        } else {
            if (currentInput !== '') {
                firstOperand = parseFloat(currentInput);
                operator = value;
                currentInput = '';
            }
        }
        console.log('Current input:', currentInput);
        console.log('Operator:', operator);
        console.log('First operand:', firstOperand);
    });
});
`

## Logging
Console statements are added to log the button value, current input, operator, and first operand for debugging purposes.
`        console.log('Clicked button value:', value);
        console.log('Current input:', currentInput);
        console.log('Operator:', operator);
        console.log('First operand:', firstOperand);
`
