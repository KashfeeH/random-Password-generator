// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var length = parseInt(prompt("Please enter a password length between 8 and 128"), "");
while (isNaN(length) || length<8 || length>128) {
length = parseInt(prompt("Invalid input. Please enter a number between 8 and 128.", ""));
}
specialCharacters = confirm("Do you want to include special characters?");
numericCharacters = confirm("Do you want to include numbers?"); 
lowerCasedCharacters = confirm("Do you want to include lowercase characters?"); 
upperCasedCharacters = confirm("Do you want to include Uppercase characters?"); 

while(!specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters){
prompt("Please select at least one character type.");
specialCharacters = confirm("Do you want to include special characters?");
numericCharacters = confirm("Do you want to include numbers?"); 
lowerCasedCharacters = confirm("Do you want to include lowercase characters?"); 
upperCasedCharacters = confirm("Do you want to include Uppercase characters?"); 
}
return [length, specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];

}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() *arr.length);
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();
var length = options[0];
var specialCharacters = options [1];
var numericCharacters = options [2];
var lowerCasedCharacters = options [3];
var upperCasedCharacters = options [4];

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerals = '0123456789';
const specialChars = '!@#$%^&*()+\\/{}[]`~-_.';

var allChars = '';
if(lowerCasedCharacters) allChars += lowerCase;
if(upperCasedCharacters) allChars += upperCase;
if(numericCharacters) allChars += numerals;
if(specialCharacters) allChars += specialChars;

var password = '';
  for (var i = 0; i < length; i++) {
      password += getRandom(allChars);
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);