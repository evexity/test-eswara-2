
// lesson:1
// how to talk to to console
console.log("Hello, World!");
console.log("I like pizza");
window.alert("angel is smart");

//this is a comment

/*this 
is 
a 
multiline
comment
*/


// lesson:2

//A variable is a container for storing data
//A variable behaves as if it was the value that it contains
//Two steps:
//1. Declaration (var, let, const)
//2. Assignment (= assignment operator)

let firstNane = "Bro"; //strings
let age = 13; //number
let student = true; //booleans
firstName = "Bro";// to give a new value

/*console.log(firstNane); to add text and then 
a varible after*/
console.log("Hello", firstName);

//console.log(age); to add age
console.log(age);
//to add age plus convosasion
console.log("your are ",age,  "years old");

//console. log(student) ; to add students name
console. log("enrollled",student) ;

//how to change id's 
document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "you are" + age + "years old";
document.getElementById("p3").innerHTML = "enrolled:" + student; 


// lesson:3
/* 
arithmetic expression is a combination Of...
operands(values, variables, etc.)
operators ( + - * / % )
that Can be evaluated to a value
ex. y= x + 5;
*/

let  students = 20;
let extrastudents = students % 2;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
/*let extrastudents = students % 2; hepls also if you want to find 
if number of students is even or odd*/

// you can also do +=
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;


//console.log(students);
//console.log(extrastudents);

/* PEMDAS
operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division
4. addition & subtraction
*/

let result = (1 + 2) * (3+4);
console.log(result);



// lesson:4
// How to accept user input

// EASY WAY with a window prompt

/*let username = window.prompt("what is your name?");
console.log(username);*/

// DIFFICULT WAY HTML textbox
/**
 * Sets up an event listener for the click event on the element with the ID "myButton".
 * When the button is clicked, it retrieves the value of the element with the ID "myText",
 * assigns it to the variable "username", and logs the value to the console.
 */

const myButton = 'myButton';
const myText = 'myText';
const myLabel = 'myLabel';

let username;
document.getElementById(myButton).onclick = function() {
    username = document.getElementById(myText).value;
    console.log(username);
    document.getElementById(myLabel).innerHTML = "Hello " + username;
}

