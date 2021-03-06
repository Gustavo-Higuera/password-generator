// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);

// These are variables containing arrays for each password character type (these are in the global scope)
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["~", "!", "@", "$", "%", "&", "*", "#"]


function generatePassword() {
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("How many characters would you like your password? Please type in a number ranging from 8 to 128.");
  if (isNaN(passwordLength)) {
    alert("Please enter a number ranging from 8 to 128.");
    return generatePassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number ranging from 8 to 128.");
    return generatePassword();
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  var lowercaseConfirm = confirm("Would you like to include lowercase letters in your password? Ok for yes, Cancel for no.");
  var uppercaseConfirm = confirm("Would you like to include uppercase letters in your password? Ok for yes, Cancel for no.");
  var numericConfirm = confirm("Would you like to include numbers in your password? Ok for yes, Cancel for no.");
  var specialConfirm = confirm("Would you like to include special characters in your password? Ok for yes, Cancel for no.");

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (lowercaseConfirm || uppercaseConfirm || numericConfirm || specialConfirm) {

    var selectedChar = [];

    if (lowercaseConfirm) {
      selectedChar = selectedChar.concat(lowercaseArray);
    } if (uppercaseConfirm) {
      selectedChar = selectedChar.concat(uppercaseArray);
    } if (numericConfirm) {
      selectedChar = selectedChar.concat(numericArray);
    } if (specialConfirm) {
      selectedChar = selectedChar.concat(specialArray);
    }

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // This is where the values for randomChar are being stored
    var completedPassword = [];
    for (let i = 0; i < passwordLength; i++) {
      // randomChar is storing the randomized array values... it needs another empty array to place those values into
      var randomChar = selectedChar[Math.floor(Math.random() * selectedChar.length)];

      // this is taking the empty array completedPassword, and inserting the values from randomChar into it
      completedPassword.push(randomChar);

    }
    // this returns completed password to the function call.. join "" is removing the commas from the array
    return completedPassword.join("");

  } else {
    alert("Please select at least one charcter type!");
    return generatePassword();
  }
}




// Write password to the #password input
function writePassword(completedPassword) {
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

