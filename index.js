/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let newString = string.split(":")[0]
  newString = parseInt(newString, 10)

  if (newString < 12) {
    return "Good Morning"
  }
  else if (newString < 17 && newString >= 12) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const updateString = document.querySelector("#greeting")
  updateString.innerText = string
}