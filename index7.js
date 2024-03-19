// lesson 8

// IF STATEMENTS = if condition is true, execute code
//                 if not, do something else
/*89
let age = 13;

if(age >= 18){
    console.log("you are old enough to enter this site");
}
else{
    console.log("you must be 18+ to enter this site");
}
*/

// ex:2
/*
let time = 9;

if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon!");
} 
*/
// ex:3
/*
let isStudent = true;

if(isStudent){
    console.log("you are a student!");
}
else{
    console.log("you are not a student");
}*/
/*
let age = 18;
let hasLicense = true;

if (age>=16 ){
    console.log("you are old enough to drive");
    if(hasLicense){
        console.log("you have your license");
    }
    else{
        console.log("you must have a license to drive");
    }
}
else{
    console.log("you must be 16+ to have a driver's license");
}*/
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    console.log("are too old to enter this site");
    resultElement.textContent = "are too old to enter this site";
  } else if (age == 0) {
    console.log("your age cant be zero");
    resultElement.textContent = "your age cant be zero";
  } else if (age >= 18) {
    console.log("you are old enough to enter this site");
    resultElement.textContent = "you are old enough to enter this site";
  } else if (age < 0) {
    console.log("your age cant be below zero");
    resultElement.textContent = "your age cant be below zero";
  } else {
    console.log("you must be 18+ to enter this site");
    resultElement.textContent = "you must be 18+ to enter this site";
  }
};
