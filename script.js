let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false

document.getElementById('button').addEventListener('click', multiply)

function multiply () {
  firstNum = parseInt(document.getElementById('first').value)
  secondNum = parseInt(document.getElementById('second').value)
  answer = 0
  negative = false
  
  if (firstNum < 0) {
    negative = !negative
    firstNum = Math.abs(firstNum)
  }
  if (secondNum < 0) {
  negative = !negative
  secondNum = Math.abs(secondNum)
  }
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  if (negative) {
    answer = 0 - answer
  }
  document.getElementById('result').innerHTML = answer
}
