// Lab6.js - Printing Even and Odd Numbers in a Custom Range using for and while loops

// Import readline module to accept user input
const readline = require('readline');

// Create an interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for the start and end of the range
rl.question('Enter the starting number of the range: ', (start) => {
  rl.question('Enter the ending number of the range: ', (end) => {

    // Convert inputs to integers
    start = parseInt(start);
    end = parseInt(end);

    // Using a for loop to print even and odd numbers
    console.log('\nUsing for loop:');

    // Even numbers
    console.log('Even numbers:');
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }

    // Odd numbers
    console.log('Odd numbers:');
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }

    // Using a while loop to print even and odd numbers
    console.log('\nUsing while loop:');

    // Even numbers
    console.log('Even numbers:');
    let j = start;
    while (j <= end) {
      if (j % 2 === 0) {
        console.log(j);
      }
      j++;
    }

    // Odd numbers
    console.log('Odd numbers:');
    let k = start;
    while (k <= end) {
      if (k % 2 !== 0) {
        console.log(k);
      }
      k++;
    }

    rl.close(); // Close the readline interface after input is processed
  });
});
