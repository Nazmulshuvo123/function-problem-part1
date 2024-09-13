/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

// function numbers(array){
//     const unique = [];
//     for(const number of array){
//         if(unique.includes(number) === false){
//             unique.push(number);
//         }

//     }
//     return unique;
// }

// console.log(numbers([5,6,11,12,98,5]));


function countOccurrences(numbers) {
    const counts = {};
    for (const number of numbers) {
      counts[number] = (counts[number] || 0) + 1;
    }
    return counts;
  }
  
  const numbers = [5, 6, 11, 12, 98, 5];
  const occurrenceCounts = countOccurrences(numbers);
  console.log(occurrenceCounts);