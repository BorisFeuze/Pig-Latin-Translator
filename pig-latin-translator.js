const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Please provide two words to be able to play");
  // return;
  process.exit(1);
}

let angabe1 = args[0].toLowerCase().trim();
let angabe2 = args[1].toLowerCase().trim();

console.log(angabe1);
console.log(angabe2);

const arrayAngabe = Array.from(angabe1);
// console.log(arrayAngabe);

let firstLetterAngabe = [];
let secondLetterAngabe = [];

let result = [];

const consonantLetter = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const vowelLetter = ["a", "e", "i", "o", "u"];

if (consonantLetter.some((letter) => letter === arrayAngabe[0])) {
  firstLetterAngabe = arrayAngabe.shift();
  // console.log(arrayAngabe);

  if (consonantLetter.some((letter) => letter === arrayAngabe[0])) {
    secondLetterAngabe = arrayAngabe.shift();
    // console.log(arrayAngabe);
  }
} else if (vowelLetter.some((letter) => letter === arrayAngabe[0])) {
}

if (firstLetterAngabe) {
  for (let i = 0; i < firstLetterAngabe.length; i++) {
    arrayAngabe.push(firstLetterAngabe[i]);
  }

  for (let i = 0; i < secondLetterAngabe.length; i++) {
    arrayAngabe.push(secondLetterAngabe[i]);
  }
}

// console.log(arrayAngabe);

result = arrayAngabe.join("") + angabe2;

console.log(
  `Your first word is ${angabe1} and your second word is ${angabe2}. Both words togehter built ${result}`
);
