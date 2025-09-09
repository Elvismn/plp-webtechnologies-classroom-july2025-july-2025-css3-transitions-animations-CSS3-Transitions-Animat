// Function with parameters + return
function addNumbers(a, b) {
  return a + b;
}

// Demonstrate scope
let globalMessage = "I am global";

function showScopeExample() {
  let localMessage = "I am local";
  console.log(globalMessage);
  console.log(localMessage);
}
showScopeExample();

// Animate box with JS by toggling class
const box = document.getElementById("box");
const animateBoxBtn = document.getElementById("animateBoxBtn");

animateBoxBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// Modal Logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Calculator Form
const calcForm = document.getElementById("calcForm");
const resultDisplay = document.getElementById("calcResult");

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Please enter valid numbers.";
    return;
  }

  const sum = addNumbers(num1, num2);
  resultDisplay.textContent = `Result: ${sum}`;
});
