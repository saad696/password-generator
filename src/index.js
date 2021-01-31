import {
  pass,
  passwordLength,
  ucLetterCheck,
  lcLetterCheck,
  numberCheck,
  symbolCheck,
  generatePassword,
} from "./DomEl";
import { generatedPassword } from "./logic.js";

generatePassword.addEventListener("click", () => {
  const length = parseInt(passwordLength.value);
  const hasUppercase = ucLetterCheck.checked;
  const hasLowercase = lcLetterCheck.checked;
  const hasNumber = numberCheck.checked;
  const hasSymbol = symbolCheck.checked;
  //console.log(hasUppercase, hasLowercase, hasNumber, hasSymbol)
  pass.innerText = generatedPassword(
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSymbol,
    length
  );
  pass.classList.remove("animate__rubberBand");
});
