/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const timeStringSplit = timeString.split(':')
  const timeStringToNumber = parseInt(timeStringSplit[0],10)*1 + parseInt(timeStringSplit[1], 10)/60
  
  if (timeStringToNumber < 12.00) { 
    return "Good Morning"
  } else if (timeStringToNumber < 17.00){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  } 
}

console.log(greet("17:45"))

/* Write your implementation of displayMessage() */
