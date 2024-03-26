
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(userInput) {

  const number = parseInt(userInput);


  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else if (number % 2 === 0) {
    console.log(number + " is an even number.");
  } else {
    console.log(number + " is an odd number.");
  }

  rl.close();
});

