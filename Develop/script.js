//Define password parameter functions
function askLength () {
  return prompt("What is your desired password length? Please enter a number between 8 and 128.")
}
function askUpper() {
  return window.confirm("Would you like to include uppercase letters?");
}
function askLower() {
  return window.confirm("Would you like to include lowercase letters?");
}
function askNumerics() {
  return window.confirm("Would you like to include numbers?");
}
function askSpecials() {
  return window.confirm("Would you like to include special characters?");
}


//Define character bank
function buildBank(wantUpper, wantLower, wantSpecial, wantNumeric) {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowers = 'abcdefghijklmnopqrstuvwxyz';
  const numerics = '1234567890';
  const specials = '!@#$%^&*()",+-.?/<>{}|~`';
  let availableCharacters = ''
  if (wantUpper) {
    availableCharacters += uppers
  }
  if (wantLower) {
    availableCharacters += lowers
  }
  if (wantSpecial) {
    availableCharacters += specials
  }
  if (wantNumeric) {
    availableCharacters += numerics
  }
  return availableCharacters;
}


//
function generatePassword () {
  // length
  const desiredPasswordLength = askLength();
    // if not between 8-128
    if (parseInt(desiredPasswordLength) < 8 || parseInt(desiredPasswordLength) > 128) {
      // do again
      alert('length needs to be between 8-128');
      generatePassword();
    }
    // else between--continue
    else {
      //4 character questions
      const wantUpper = askUpper();
      const wantLower = askLower();
      const wantNumeric = askNumerics();
      const wantSpecial =  askSpecials();
        // if all no
        if (!wantUpper && !wantLower && !wantNumeric && !wantSpecial) {
          // do again warn too
          alert('you need to choose at least one character set')
          generatePassword()
        }
        // else at least 1 chosen
        else {
          // actually generate
          let generatedPassword = '';
          // build available character bank
          let availableCharacters = buildBank(wantUpper, wantLower,wantSpecial,wantNumeric);
          //it is built
          for (let i = 0; i < parseInt(desiredPasswordLength); i++) {
            let randomIndex = Math.floor(Math.random()*availableCharacters.length);
            console.log('randomIndex on loop ' + i, randomIndex)
            console.log('randomCharacter then is ' + availableCharacters[randomIndex]);
            generatedPassword += availableCharacters[randomIndex];
          }

          return generatedPassword;
        }

    }
}

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