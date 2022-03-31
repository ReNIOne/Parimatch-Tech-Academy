//Функция выводит в консоль все числа в строке "ECMAScript 2015 (6th Edition, ECMA-262)"
/*const string = "ECMAScript 2015 (6th Edition, ECMA-262)";
const splitedString = Array.from(string);
const fitleredString1 = splitedString.filter((letter) =>
  Number.isFinite(Number(letter))
);
const fitleredString2 = fitleredString1.filter(
  (string) => string !== "" && string !== " "
);
const completeString = fitleredString2.join("")
console.log(completeString);*/

//Функция выводит все заглавные буквы в строке "ECMAScript 2015 (6th Edition, ECMA-262)"
const string = "ECMAScript 2015 (6th Edition, ECMA-262)";
const splitedString = Array.from(string);
const fitleredString1 = splitedString.filter((letter) =>
    !Number.isFinite(Number(letter))
);
const fitleredString2 = fitleredString1.filter(
    (letter) => letter === letter.toUpperCase()
);
const fitleredString3 = fitleredString2.filter(
    (letter) => letter !== "(" && letter !== ")" && letter !== "," && letter !== "-"
);
const completeString = fitleredString3.join("")
console.log(completeString);