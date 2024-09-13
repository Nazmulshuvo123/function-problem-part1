/**
 * Generate a random number between 10 to 20.
 */

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = generateRandomNumber(10, 20);
  console.log(randomNumber);