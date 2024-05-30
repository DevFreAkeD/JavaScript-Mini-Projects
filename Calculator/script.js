document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display'); // The display element where the input/output is shown
    const buttons = document.querySelectorAll('.btn'); // All buttons on the calculator
    let currentInput = ''; // The current input value being typed
    let operator = null; // The operator (+, -, *, /) currently selected
    let firstOperand = null; // The first operand before an operator is pressed

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value'); // Get the value of the button pressed

            if (value >= '0' && value <= '9' || value === '.') {
                // If the value is a digit or a decimal point
                currentInput += value; // Append the value to the current input
                display.value = currentInput; // Update the display
                console.log(currentInput);
            } else if (value === 'c') {
                currentInput = ''; // Reset current input
                operator = null; // Reset operator
                firstOperand = null; // Reset first operand
                display.value = ''; // Clear the display
                console.log("Display Cleared");
            } else if (value === '=') {
                // Calculation Logic
            } else {
                // If the value is an operator (+, -, *, /)
            }
        });
    });
});
