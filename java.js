
/*var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18 ) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}
document.write("<h3>" + greeting + "</h3>");*/


/*Credit: JS code structure below from Mozilla*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your favorite Detroit team.');
  localStorage.setItem('name', myName);
  myHeading.textContent = ('Lets Go ' + myName+ '!!!');
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Contact Page ';
}
myButton.onclick = function() {
  setUserName();
}
