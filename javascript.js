
// External JavaScript file: 

// Function to check if a number is an Armstrong number
function isArmstrongNumber(number) {
    let sum = 0;
    let numStr = number.toString();
    for (let i = 0; i < numStr.length; i++) {
      sum += Math.pow(Number(numStr[i]), numStr.length);
    }
    return sum === number;
  }
  
  // Function to check if a number is a palindrome
  function isPalindrome(number) {
    let numStr = number.toString();
    return numStr === numStr.split('').reverse().join('');
  }
  
  // Function to check if a number is a perfect number
  function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum === number;
  }
  
  // Function to display result in an alert box
  function showAlert(message) {
    alert(message);
  }
  
  
  // Function to check the input number and display the result
  function checkNumber() {
    let numberInput=prompt("Enter a number to check if it's an Armstrong number, palindrome, or perfect number:");
    let number = parseInt(numberInput);
    if (isNaN(number)) {
        alert('Please enter a valid number.');
        checkNumber();
        return;
      }
    
    let result = '';
    if (isArmstrongNumber(number)) {
      result += number + ' is an Armstrong number.\n';
    }
    if (isPalindrome(number)) {
      result += number + ' is a palindrome.\n';
    }
    if (isPerfectNumber(number)) {
      result += number + ' is a perfect number.\n';
    }
    if (result === '') {
      result = 'The number is not an Armstrong number, palindrome, or perfect number.';
    }
    showAlert(result);
  
    let continueChoice = confirm('Do you want to check another number?\n\nPress "OK" to continue or "Cancel" to exit.');

    if (continueChoice) {
        checkNumber();
    }
}
checkNumber();