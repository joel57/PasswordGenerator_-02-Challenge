// Assignment Code
//Varibles that will save info
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar ="0123456789";
var specialChar = "!@#$%^&*()_+-={}[]|\:;'<>?,./~`'"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function for determining the passwords length
function determineLegth(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

  if (passwordlegngth<8) {
    alert("Password length must be a number between 8-128 characters");
  }

}




//me:






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
