// assigning variables
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false
// calling function multiply on button click
document.getElementById('button').addEventListener('click', multiply)

function multiply () {
  // takes the first two inputs and converts them to integers
  firstNum = parseInt(document.getElementById('first').value)
  secondNum = parseInt(document.getElementById('second').value)
  answer = 0
  negative = false
  // checks if the first number is negative, then updates the varible if it is
  if (firstNum < 0) {
    negative = !negative
    firstNum = Math.abs(firstNum)
    }
    // same as the first number
  if (secondNum < 0) {
  negative = !negative
  secondNum = Math.abs(secondNum)
  }
  // a loop that adds the numbers together as many times as it needs to in order to simulate multiplication, adds to the counter each time it loops
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  // if the number is negative it subtracts it from zero making it display a negative integer
  if (negative) {
    answer = 0 - answer
  }
  // writes answer
  document.getElementById('result').innerHTML = answer
}
