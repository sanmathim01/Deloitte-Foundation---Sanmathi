// Lab3.js - Simple Terminal Calculator

// Import readline module for terminal input
const readline = require('readline');

// Create an interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform the calculation
function calculate() {
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      rl.question('Select operation (+, -, *, /): ', (operation) => {
        
        // Convert string input to numbers
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        let result;

        // Perform calculation based on user input
        switch (operation) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
          default:
            result = 'Invalid operation';
        }

        console.log(`Result: ${result}`);
        rl.close(); // Close the readline interface
      });
    });
  });
}

// Call the calculate function to start the program
calculate();