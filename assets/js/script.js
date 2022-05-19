// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays with available content for password
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialty = ["!", "#", "$", "%", "&", "(", ")", "*", " < ", " > ", " ? ", "@", " ^ "];

// variable for the options that are selected so they can be combined for the password
var selectedOptions;

// Write password function to be called by clicking the Generate Password Button
function writePassword() {

  // prompt to find out the length, then verifies length
  var passLength = prompt("How many characters would you like the password to be? \nMust be between 8 and 128 characters");
  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Password needs a minimum of 8 characters"));
  }

  // a popup to ask if lowercase letters
  var lowerChars = confirm("Do you want lower case letters?");

  // a popup to ask if uppercase letters
  var upperChars = confirm("Do you want upper case letters?");

  //a popup to ask if numbers 
  var numChars = confirm("Do you want numbers?");

  // a popup to ask if special characters
  var specialChars = confirm("Do you want special characters?");

  // if all 4 are selected No
  if (!lowerChars && !upperChars && !numChars && !specialChars) {
    // selectedOptions = alert("You must at least one criteria");
    selectedOptions = console.log("choose one b");
    selectedOptions = alert("You must have at least one criteria selected");
  }

  // if all 4 options are selected Yes
  if (lowerChars && upperChars && numChars && specialChars) {
    selectedOptions = lower.concat(upper, numbers, specialty);

    // if only 3 options are selected Yes
    // if lowercase, uppercase and numbers are selected Yes
  } else if (lowerChars && upperChars && numChars) {
    selectedOptions = lower.concat(upper, numbers);

    // if lowercase, uppercase and specialty characters are selected Yes
  } else if (lowerChars && upperChars && specialChars) {
    selectedOptions = lower.concat(upper, specialty);

    // if lowercase, numbers and specialty characters are selected Yes
  } else if (lowerChars && numChars && specialChars) {
    selectedOptions = lower.concat(numbers, specialty);

    // if uppercase, numbers, and specialty characters are selected Yes
  } else if (upperChars && numChars && specialChars) {
    selectedOptions = upper.concat(numbers, specialty);


    // if only 2 options are selected Yes
    // if lowercase and uppercase are selected Yes
  } else if (lowerChars && upperChars) {
    selectedOptions = lower.concat(upper);

    //if lowercase and numbers are selected Yes 
  } else if (lowerChars && numChars) {
    selectedOptions = lower.concat(numbers);

    // if lowercase and specialty characters are selected Yes
  } else if (lowerChars && specialChars) {
    selectedOptions = lower.concat(specialty);

    // if uppercase and numbers are selected Yes
  } else if (upperChars && numChars) {
    selectedOptions = upper.concat(numbers);

    // if uppercase and specialty characters are selected Yes
  } else if (upperChars && specialChars) {
    selectedOptions = upper.concat(specialty);

    // if numbers and specialty characters are selected Yes
  } else if (numChars && specialChars) {
    selectedOptions = numbers.concat(specialty);


    // if only 1 option is selected
    // if lowercase is selected
  } else if (lowerChars) {
    selectedOptions = lower;

    // if uppercase is selected
  } else if (upperChars) {
    selectedOptions = upper;

    // if numbers is selected
  } else if (numChars) {
    selectedOptions = numbers;

    // if specialty characters is selected
  } else if (specialChars) {
    selectedOptions = specialty;
  };

  // creates the password variable as an array 
  var password = [];

  //  a loop to create the password up the amount of characters that were selected in the prompt
  for (var i = 0; i < passLength; i++) {
    var helicopter = selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
    password.push(helicopter);
  }
  //googled how to get rid of the commas that appeared in the password when it was being created 
  password = password.join("");

  // pop up window with the created password
  alert(password);
}

// Add event listener to generate button, calls the function to write password
generateBtn.addEventListener("click", writePassword);