//lesson 9
// checked = property that determines the checked of an
//           HTML checkbox or radio button element
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = "you are subscribed";
    }
    else{
        subResult.textContent = "you are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with visa";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "you are paying with masterCard";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "you are paying with payPal";
    }
    else{
        paymentResult.textContent = "please select a payment method";
    }
}