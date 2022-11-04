// Assignment code here

// I want to click the button and a prompt shows up asking how many characters for the password 
    // I want the selection to be between 8 and 128 
// After selecting the password length I want more prompts to ask the user what characters they want to include
    // these confirm boxes will ask for lower case, upper case, numbers, and special characters
// When all prompts are selected then I want the chosen criteria to populate an empty array to isolate the variables we want to include 
    // I will have to make a for loop or if else to push the chosen arrays into the empty array 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var randomPassword = "";

var lowerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

var chosenCriteria = []


function generatePassword() {
    var firstInput = prompt('How many character do you want the password to contain? Choose between 8 and 128');
    console.log(firstInput);

    var passLength = parseInt(firstInput);

    if (passLength >= 8 && passLength <= 128) {
        console.log('Desired password length is ' + passLength)
    } else {
        confirm('You must choose between 8 and 128 characters')
    }

    var lower = window.confirm("Do you want the password to contain any lower case letters?")
    console.log('User wants to include lower case letters: ' + lower)

    var upper = window.confirm("Do you want the password to contains any upper case letters?")
    console.log('User wants to include upper case letters: ' + upper)

    var numbers = window.confirm("Do you want the password to include numbers?")
    console.log('User wants to include numbers: ' + numbers)

    var special = window.confirm("Do you want the password to contain any special characters?")
    console.log('User wants to include speical characters: ' + special)
    
    // if none are selected then an alert will tell the user to select at least one criteria
    if (!lower && !upper && !numbers && !special) {
        alert('Attention, you must choose at least one criteria')
    }
    // I don't want to use if else because it will stop running if the first boolean is true and I want them all to get logged if they are true
    if (lower) {
        chosenCriteria = chosenCriteria.concat(lowerList)
    }
    if (upper) {
        chosenCriteria = chosenCriteria.concat(upperList)
    }
    if (numbers) {
        chosenCriteria = chosenCriteria.concat(numbersList)
    }
    if (special) {
        chosenCriteria = chosenCriteria.concat(specialList)
    };
    
    console.log(chosenCriteria);
    


    // I needed to get a random integer within the range of the password length 
    // this function should provide me with a random integer between 0 and the max length of our array 
    // next I need to make a function that will pull a random array item based on the random integer function


// function generateRandomItem(chosenCriteria) {
//         return Math.floor(Math.random() * chosenCriteria.length) + 1;
//     }

    for (var i = 0; i < passLength; i++) {
        var randomItem = Math.floor(Math.random() * chosenCriteria.length) + 1
        console.log(chosenCriteria[randomItem])
        randomPassword = randomPassword + chosenCriteria[randomItem]
    }
    // when it console logs the randomly generated password it displays as NaN
    // how do I fix this?
    return randomPassword
    
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

