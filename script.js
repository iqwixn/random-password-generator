// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];
var length;
var chosenCharacters = ""; 
var randomPassword = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Create series of prompts that asks for uppercase/lowercase letters, numbers and special characters.
// Modify code to include or exclude characters depending on user's choice. Password needs to include at least one choice from above.
// Password will not generate if under 8 characters or over 128 characters.
// If all conditions are met, password will generate as an alert or written to the page.

function generatePassword() {
 
  length = window.prompt ("Please enter a number between 8 and 128");
 // Ask for password length 
  if (!length){
    return;
  }
  if (length < 8 || length > 128){
    window.confirm("Please choose a number between 8 and 128 ");
  // Ask to include specific characters
  } else {
    lowerChars = window.confirm("Will this include lowercase characters?");
    upperChars = window.confirm("Will this include uppercase characters?");
    numbers = window.confirm("Will this include numbers?");
    specialChars = window.confirm("Will this include special characters?");

  };
  if (!lowerChars && !upperChars && !numbers && !specialChars == true){
    window.alert("Please select at least one type of character to choose.")
  writePassword();
  }
  if (lowerChars && !upperChars && !numbers && !specialChars == true){
   

      password = lowerChars[Math.floor(Math.random() * lowerChars.length)];
      
    
    }


  }



/*
function genLowercase() {
  return lowerChars[Math.floor(Math.random() * lowerChars.length)];

}

function genUppercase() {
  return upperChars[Math.floor(Math.random() * upperChars.length)];

}

function genNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];

}

function generateSpecial() {
    return specialChars[Math.floor(Math.random() * specialChars.length)];
};
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
