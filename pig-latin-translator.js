const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Please provide two words to be able to play");
  // return;
  process.exit(1);
}

let angabe1 = args[0].toLowerCase().trim();
let angabe2 = args[1].toLowerCase().trim();

// console.log(angabe1);
// console.log(angabe2);

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

const arrayAngabe = angabe1.split(" ");
console.log(arrayAngabe);

let result = [];
let temporalyWord = [];
let temporalyResult = [];
let count = 0;
let countWord = 0;

for (let i = 0; i < arrayAngabe.length; i++) {
  let word = arrayAngabe[i];
  let arrayWord = Array.from(word);
  let firstLetterWord = [];

  let isUppercase;

  count = 0;

  if (countWord < 2) {
    isUppercase = true;
    countWord += 1;
  } else {
    isUppercase = false;
  }

  for (let i = 0; i < arrayWord.length; i++) {
    let isConsonantLetter = false;
    let isVowelLetter = false;

    vowelLetter.some((letter) => letter === arrayWord[0])
      ? (isVowelLetter = true)
      : (isVowelLetter = false);
    consonantLetter.some((letter) => letter === arrayWord[0])
      ? (isConsonantLetter = true)
      : (isConsonantLetter = false);

    if (count > 1) {
      isUppercase = false;
    }

    if (isConsonantLetter) {
      firstLetterWord = arrayWord.shift();
      count += 1;

      if (firstLetterWord) {
        arrayWord.push(firstLetterWord[i]);
      }
      temporalyWord = arrayWord.join("");
      // console.log(temporalyWord);
    } else if (isVowelLetter) {
      if (isUppercase) {
        arrayWord.splice(0, 0, arrayWord.shift().toUpperCase());
        temporalyWord = arrayWord.join("");
      } else {
        // console.log(arrayWord);
        temporalyWord = arrayWord.join("");
        // console.log(temporalyWord);
      }
    }
  }

  temporalyResult.push(temporalyWord + angabe2);
  // console.log(temporalyResult);
}

result = temporalyResult.join(" ");

console.log(result);

// return;
process.exit(0);
