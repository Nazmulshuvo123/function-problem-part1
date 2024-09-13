/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */
function longestWord(string){
    let words = string.split(" ") ;
    let longestWord = '';
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }

    }
    return longestWord;
    
}
const word = longestWord('I am learning Programming to become a programmer');
console.log("The longest word is: ", word);