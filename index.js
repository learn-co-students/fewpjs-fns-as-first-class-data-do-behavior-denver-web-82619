/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  if (timeString.split(':')[0] < 12) {
    return 'Good Morning'
  } else if (timeString.split(':')[0] > 12 && timeString.split(':')[0] < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}

function displayMessage(string) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = string
}