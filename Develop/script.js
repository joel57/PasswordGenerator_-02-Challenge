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
    determineLength();
  }else if (passwordlength>128){
    alert("Password length must be a number between 8-128");
    determineLength();
  }else if(isNaN(passwordLength)){
    alert("Password length must be a number 8-128 characters");
    determineLength();
  }else{
    alert("The next three prompts will ask what type of characters you would like to be in the password. If you choose 'No' for AbortController, your password will only contain lower case");
  }
  return passwordLength;

}

// Creating Functions for lowecase & upcase letters in password.
function determineUpperCase(){
  upperCaseCheck = prompt("Do you want to include uppercase leters? Yes or No");
  upperCaseCheck = upperCaseCheck.toLowerCase();

  if (upperCaseCheck === null || upperCaseCheck === ""){
    alert ("Please answer Yes or No");
    ditermineUpperCase();

  }else if (upperCaseCheck === "yes" || upperCaseCheck === "YES"){
    upperCaseCheck = true;
return upperCaseCheck;

  }else if (upperCaseCheck === "no" || upperCaseCheck ==="n"){
    upperCaseCheck = false;
    return upperCaseCheck;
  }else {
    alert("please answer yes or no");
    determineUpperCase();
  }

  return upperCaseCheck;

}


console.log()



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
