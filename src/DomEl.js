export {
  pass,
  copyPassword,
  mail,
  passwordLength,
  ucLetterCheck,
  lcLetterCheck,
  numberCheck,
  symbolCheck,
  generatePassword,
  message
};

const pass = document.querySelector(".pass");
const copyPassword = document.getElementById("clipboard");
const mail = document.getElementById("mail");
const passwordLength = document.getElementById("pass-length");
const ucLetterCheck = document.getElementById("u-letter");
const lcLetterCheck = document.getElementById("l-letter");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbols");
const generatePassword = document.getElementById("generate-pass");
const message = document.querySelector(".message")
