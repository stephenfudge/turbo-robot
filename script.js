// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890"
var specialty = "!?<>!@#$%^&*()"



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  // prompt to find out the length, then verifies length
  var passLength = prompt("How many characters would you like the password to be? \nMust be between 8 and 128 characters");
  passLength = parseInt(passLength);

  if (passLength < 8) {
    alert("Password needs a minimum of 8 characters");
    return "";
  }
  if (passLength > 128) {
    alert("Passwords must not have more than 128 characters");
    return "";
  }

  // a popup to ask if lowercase letters
  var lowerChars = confirm("Do you want lower case letters?");
  if (lowerChars) {
    password = password + lowerChars;
  }

  // a popup to ask if uppercase letters
  var upperChar = confirm("Do you want upper case letters?");
  if (upperChar) {
    password = password + upperChar;
  }

  //a popup to ask if numbers 
  var testChars = confirm("Do you want numbers?");
  if (testChars) {
    password = password + testChars;
  }

  // a popup to ask if special characters
  var specialChars = confirm("Do you want special characters?");
  if (specialChars) {
    password = password + specialChars;
  }

  // alert with created password
  alert(passwordText.value);
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);