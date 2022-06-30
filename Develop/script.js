// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password? Please type in a number ranging from 8 to 128.");
  if (isNaN(passwordLength)) {
    alert("Please enter a number ranging from 8 to 128.");
    return generatePassword();
  }
  if (passwordLength < 8) {
    alert("Please enter a number ranging from 8 to 128.");
    return generatePassword();
  }
  if (passwordLength > 128) {
    alert("Please enter a number ranging from 8 to 128.");
    return generatePassword();
  };

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  var lowercasePass = confirm("Would you like to include lowercase letters in your password? Ok for yes, Cancel for no.");
  var uppercasePass = confirm("Would you like to include uppercase letters in your password? Ok for yes, Cancel for no.");
  var numericPass = confirm("Would you like to include numbers in your password? Ok for yes, Cancel for no.");
  var specialPass = confirm("Would you like to include special characters in your password? Ok for yes, Cancel for no.");

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (lowercasePass || uppercasePass || numericPass || specialPass) {
    console.log("You have done this part correct");
  } else {
    alert("Please select at least one charcter type!");
    return generatePassword();
  }

}

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
