const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Function to perform addition
function add(a, b) {
  return a + b;
}


// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}


// Function to perform multiplication
function multiply(a, b) {
  return a * b;
}




// Function to perform division
function divide(a, b) {
  if (b === 0) {
    throw new Error('DivideByZeroError: Division by zero is not allowed.');
  }
  return a / b;
}

// Function to display the menu
function displayMenu() {
  console.log('Menu:');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Exit');
}


// Function to handle user input and perform operations
function handleUserInput(choice) {
  switch (choice) {


    case '1':
      rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
          const result = add(parseFloat(num1), parseFloat(num2));
          console.log('Result:', result);
          displayMenu();
          askForChoice();
        });
      });
      break;

    case '2':
      rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
          const result = subtract(parseFloat(num1), parseFloat(num2));
          console.log('Result:', result);
          displayMenu();
          askForChoice();
        });
      });
      break;
    case '3':
      rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
          const result = multiply(parseFloat(num1), parseFloat(num2));
          console.log('Result:', result);
          displayMenu();
          askForChoice();
        });
      });
      break;


    case '4':
      rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
          try {
            const result = divide(parseFloat(num1), parseFloat(num2));
            console.log('Result:', result);
          } catch (error) {
            console.log('Error:', error.message);
          }
          displayMenu();
          askForChoice();
        });
      });
      break;


    case '5':
      rl.close();
      break;


    default:
      console.log('Invalid choice. Please try again.');
      displayMenu();
      askForChoice();
      break;
  }
}





// Function to ask for user's choice
function askForChoice() {
  rl.question('Enter your choice: ', (choice) => {
    handleUserInput(choice);
  });
}

// Start the application
displayMenu();
askForChoice();
