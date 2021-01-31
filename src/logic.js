import {
  uppercaseLetters,
  lowercaseLetters,
  numbers,
  symbols,
} from "./randomChars";

const randomCharObj = {
  upper: uppercaseLetters,
  lower: lowercaseLetters,
  number: numbers,
  symbol: symbols,
};
export const generatedPassword = (upper, lower, number, symbol, length) => {
  let password = "";
  const count = upper + lower + number + symbol;
  //filtered out unchecked items
  const selectionArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (count === 0) {
    return;
  }
  //console.log(selectionArray)
  for (let i = 0; i < length; i += count) {
    selectionArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      //console.log(funcName)
      password += randomCharObj[funcName]();
    });
  }
  //console.log(password.slice(0,length))
  return password.slice(0, length);
};
