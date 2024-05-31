document.addEventListener('DOMContentLoaded', () => {
    
    const display = document.getElementById('display'); // The display element where the input/output is shown
    const buttons = document.querySelectorAll('.btn'); // All buttons on the calculator
    let currentInput = ''; // The current input value being typed
    let operator = null; // The operator (+, -, *, /) currently selected
    let firstOperand = null; // The first operand before an operator is pressed

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value'); // Get the value of the button pressed
            console.log('Clicked button value:', value); // Add console statement to log button value

            if (value >= '0' && value <= '9' || value === '.') {
                // If the value is a digit or a decimal point
                currentInput += value; // Append the value to the current input
                display.value = currentInput; // Update the display
            } else if (value === 'c') {
                // If the value is 'c', clear the input
                currentInput = ''; // Reset current input
                operator = null; // Reset operator
                firstOperand = null; // Reset first operand
                display.value = ''; // Clear the display
            } else if (value === '=') {
                // If the value is '=', calculate the result
                if (operator && firstOperand !== null) {
                    const secondOperand = parseFloat(currentInput); // Convert current input to a number
                    currentInput = ''; // Reset current input
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

                    display.value = result; // Display the result
                    firstOperand = result; // Set the result as the first operand for further calculations
                    operator = null; // Reset operator
                }
            } else {
                // If the value is an operator (+, -, *, /)
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput); // Set the first operand
                    operator = value; // Set the operator
                    currentInput = ''; // Reset current input for the next number
                }
            }
            console.log('Current input:', currentInput); // Add console statement to log current input
            console.log('Operator:', operator); // Add console statement to log operator
            console.log('First operand:', firstOperand); // Add console statement to log first operand
        });
    });
});
