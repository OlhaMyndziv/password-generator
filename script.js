var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// character
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '?', '@', ',', '-', '.', '/', ':', ';', '<', '>', '=', '[', ']', '\\', '^', '_', '`', '{', '}', '|', '~'];

var randomPassword = [];

//  random password 
function generatePassword(arr, number) {
	var newArray = arr.flat();
	var newPassword = [];
	for (var i = 0; i < number; i++) {
		var randomIndex = Math.floor(Math.random() * newArray.length - 1) + 1;
		newPassword.push(newArray[randomIndex]);
	}
	return newPassword.join('');
}

//  #password input
function writePassword() {

	var numberOfCharacters = parseInt(prompt('How many characters do you want the password to be?'));

	if (numberOfCharacters < 8 || numberOfCharacters > 128) {
		alert('Type a number between 8 and 128.');
		return;
	} else if (isNaN(numberOfCharacters)) {
		alert('Type a valid number.');
		return;
	}

	

	var numberQuestion = confirm('Do you want the password to have numbers? ');
    var upperCaseQuestion = confirm('Do you want uppercase characters?');
	var lowerCaseQuestion = confirm('Do you want lowercase characters?');
	var specialCharactersQuestion = confirm('Do you want special characters? ');

    if (numberQuestion) {
		randomPassword.push(numbers);
	}
    if (upperCaseQuestion) {
		randomPassword.push(upperCase);
	}
    if (lowerCaseQuestion) {
		randomPassword.push(lowerCase);
	}

	if (specialCharactersQuestion) {
		randomPassword.push(specialCharacters);
	}

	else if (!specialCharactersQuestion && !numberQuestion && !lowerCaseQuestion && !upperCaseQuestion) {
		alert('Select at least one character type.')
		return;
	}

	var password = generatePassword(randomPassword, numberOfCharacters);

	passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
