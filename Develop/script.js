// Assignment code here

//let arrayFromLowToHigh = (low, high) => {
  //const array = [];
  //for (let i = low; i <= high; i++) {
  //  array.push(i);
  //}
 // return array;
//};


 //Generating Character Codes
//const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
//const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
//const NUMBER_CODES = arrayFromLowToHigh(48, 57);
//const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
 // .concat(arrayFromLowToHigh(58, 64))
 // .concat(arrayFromLowToHigh(91, 96))
  //.concat(arrayFromLowToHigh(123, 126));


  
//function secureMathRandom() {
//	return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
//}
//function getRandomLower() {
//	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}
//console.log(getRandomLower());
//function getRandomUpper() {
//	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}
//console.log(getRandomUpper());
//function getRandomNumber() {
//	return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
//}
//console.log(getRandomNumber());
//function getRandomSymbol() {
//	const symbols = '~!@#$%^&*()_+{}":?><;.,';
//	return symbols[Math.floor(Math.random() * symbols.length)];
//}
//console.log(getRandomSymbol());




const getLength = function() {
  
  length = prompt("What is your desired password length? Please enter a number between 8 and 128.");
  
  
  if (parseInt(length)> 8 && parseInt(length)< 128) {
    window.alert("Your password length is " + length);
  return parseInt(length);
   } else {
  
    window.alert("Please enter a number between 8 and 128!")
  
    getLength();
  }
}
getLength();

const confirmUppercase = function() {
  uppercase = window.confirm("Would you like to include uppercase letters?");
}
confirmUppercase();
const confirmLowercase = function() {
  lowercase = window.confirm("Would you like to include lowercase letters?");
}
confirmLowercase();
const confirmNumbers = function() {
  numbers = window.confirm("Would you like to include numbers?");
}
confirmNumbers();
const confirmSymbols = function() {
  symbols = window.confirm("Would you like to include special characters?");
}
confirmSymbols();
const UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const NUMBER = ['1','2', '3', '4', '5', '6', '7', '8', '9'];
const SYMBOL = [' ', '!', '"', '#', '$',' %', '&', "'", '(',' )', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\\', '^','_', '`', '{', '|', '}', '~']
//  .concat(arrayFromLowToHigh(58, 64))
//  .concat(arrayFromLowToHigh(91, 96))
//  .concat(arrayFromLowToHigh(123, 126));


//const characters = [
 // ... uppercase ? [UPPERCASE] : [],
 // ... lowercase ? [LOWERCASE] : [],
 // ... numbers ? [NUMBER] : [],
 // ... symbols ? [SYMBOL] : [],
// ];


//Construct character set based on responses
const unCharacters = [
  uppercase ? [UPPERCASE] : null,
  lowercase ? [LOWERCASE] : null,
  numbers ? [NUMBER] : null,
  symbols ? [SYMBOL] : null,
] .filter(Boolean);


//Flatten array so that the resulting array contains only strings and is not an array of arrays.
const characters = unCharacters.flat(Infinity)
console.log(characters);
console.log(length);

while (characters) {
  window.alert("You need to select at least one character set to include in the password!")

  confirmUppercase();
  confirmLowercase();
  confirmNumbers();
  confirmSymbols();
}

//Loop over random selector to get password
const generatePassword = function() {
  let newPassword = "";
  for (let i = 0; i < length; i++) {
    newPassword += characters[
      Math.floor(Math.random() * characters.length)
    ];
    }
  return newPassword;
};
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
