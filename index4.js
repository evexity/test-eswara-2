
// lesson 6
// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLablel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLablel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLablel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLablel.textContent = count;
}