// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Ensure division by zero does not occur
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Attach event listeners for each button
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;  // Get the first number (default 0)
    const number2 = parseFloat(document.getElementById('number2').value) || 0;  // Get the second number (default 0)
    const result = add(number1, number2);  // Perform addition
    document.getElementById('calculation-result').textContent = result;  // Display result
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);  // Perform subtraction
    document.getElementById('calculation-result').textContent = result;  // Display result
});

document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);  // Perform multiplication
    document.getElementById('calculation-result').textContent = result;  // Display result
});

document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);  // Perform division
    document.getElementById('calculation-result').textContent = result;  // Display result
});
