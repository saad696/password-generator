export const uppercaseLetters = () => {
  return String.fromCharCode(Math.floor(Math.random() * 24) + 97);
};

export const lowercaseLetters = () => {
  return String.fromCharCode(Math.floor(Math.random() * 24) + 65);
};

export const numbers = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

export const symbols = () => {
  const symbols = "~`!@#$%^&*(),/<>[]{}.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
