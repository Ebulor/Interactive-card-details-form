const form = document.querySelector(".form");
const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const successCard = document.querySelector(".success");
const formInputs = document.querySelectorAll("input");
const confirmBtn = document.querySelector(".confirm-btn");
let ValueName = false;
let ValueNumber = false;
let ValueMonth = false;
let ValueYear = false;
let ValueCVC = false;

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.add("active");
  });
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formInputs.forEach((input) => {
    if (input.value === "") {
      input.parentElement.classList.add("error");
    }
    if (
      ValueName === true &&
      ValueNumber === true &&
      ValueMonth === true &&
      ValueYear === true &&
      ValueCVC === true
    ) {
      successCard.style.display = "flex";
      form.style.display = "none";
    }
  });
});

//Name validation
cardName.addEventListener("input", (e) => {
  const cardNameDisplay = document.querySelector(".card-name-display");
  e.target.value = e.target.value.replace(/[^a-zA-Z]+/, "");
  cardNameDisplay.textContent = e.target.value.toUpperCase();
  if (e.target.value === "") {
    cardName.parentElement.classList.add("error");
  } else {
    cardName.parentElement.classList.remove("error");
    ValueName = true;
  }
});

//Card number validation
cardNumber.addEventListener("input", (e) => {
  const cardNumberDisplay = document.querySelector(".card-number-display");
  e.target.value = e.target.value
    .replace(/[^\d]+/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  const cardNumberError = cardNumber.parentElement.children[2];
  if (e.target.value.length < 19) {
    cardNumber.parentElement.classList.add("error");
    cardNumberError.textContent = "Wrong Format";
  } else {
    cardNumber.parentElement.classList.remove("error");
    ValueNumber = true;
  }
  cardNumberDisplay.textContent = e.target.value;
});

//Month validation
month.addEventListener("input", (e) => {
  const monthDisplay = document.querySelector(".month-display");
  e.target.value = e.target.value.replace(/[^\d]+/g, "");
  monthDisplay.textContent = e.target.value;
  const monthError = month.parentElement.children[2];
  if (e.target.value.length < 2) {
    month.parentElement.classList.add("error");
    monthError.textContent = "Wrong Format";
  } else {
    month.parentElement.classList.remove("error");
    ValueMonth = true;
  }
  ValueMonth = true;
});

//Year validation
year.addEventListener("input", (e) => {
  const yearDisplay = document.querySelector(".year-display");
  e.target.value = e.target.value.replace(/[^\d]+/g, "");
  yearDisplay.textContent = e.target.value;
  const yearError = year.parentElement.children[2];
  if (e.target.value.length < 2) {
    year.parentElement.classList.add("error");
    yearError.textContent = "Wrong Format";
  } else {
    year.parentElement.classList.remove("error");
    ValueYear = true;
  }
});

//Cvc validation
cvc.addEventListener("input", (e) => {
  const cvcDisplay = document.querySelector(".cvc-display");
  e.target.value = e.target.value.replace(/[^\d]+/g, "");
  const cvcError = cvc.parentElement.children[2];
  if (e.target.value.length < 3) {
    cvc.parentElement.classList.add("error");
    cvcError.textContent = "Wrong Format";
  } else {
    cvc.parentElement.classList.remove("error");
    ValueCVC = true;
  }
  cvcDisplay.textContent = e.target.value;
});
