const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const btnTry = document.querySelector("#btn-try");
const btnAgain = document.querySelector("#btn-again");
const inputNumber = document.querySelector("#number-input");
const secondScreenH2 = document.querySelector(".second-screen h2");
let numberGenerator = Math.round(Math.random() * 10);
let xAttempts = 1;

const tryButton = btnTry.addEventListener("click", handleTryClick);
const btnReset = btnAgain.addEventListener("click", resetButton);

function handleTryClick(e) {
  e.preventDefault();
  if (parseInt(inputNumber.value) == numberGenerator) {
    toggleScreen();
    secondScreenH2.innerText = `You won in ${xAttempts} attempts.`;
  } else if (inputNumber.value === "") {
    alert("Insert some number to guess");
  }
  inputNumber.value = "";
  xAttempts++;
}

function resetButton() {
  toggleScreen();
  xAttempts = 1;
  numberGenerator = Math.round(Math.random() * 10);
}

function toggleScreen() {
  firstScreen.classList.toggle("hide");
  secondScreen.classList.toggle("hide");
}

function enterValidation() {
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && firstScreen.classList.contains("hide")) {
      resetButton();
    }
  });
}

const numbersValidation = inputNumber.addEventListener("input", function () {
  let value = inputNumber.value;
  const numericValue = value.replace(/[^0-9\.]/g, "");

  if (value >= 0 && numericValue <= 10) {
    handleTryClick();
  } else {
    alert("Insert numbers between 0 and 10 to guess.");
    inputNumber.value = ""
  }
});

