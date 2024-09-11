/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */
function convertCelsiusToFahrenheit(celsius){
    let formula = (9 / 5) + 32;
    let Fahrenheit = celsius * formula;
    console.log(Fahrenheit);

}

convertCelsiusToFahrenheit(10);