/**
 * Write a function to count the number of vowels in a string.
 */

function countVowels(string){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0;
    for(let vowel of string){
        if(vowels.includes(vowel)){
          vowelCount++;
        }
    }
    return vowelCount;
}
const text = 'Dhaka is a big city';
console.log("The number of vowels are: ",countVowels(text)) 


