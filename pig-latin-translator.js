const args = process.argv.slice(2);

// if (args.length < 2) {
//   console.error("Please provide two words to be able to play");
//   // return;
//   process.exit(1);
// }

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
// console.log(arrayAngabe);

let result = [];

let temporalyResult = [];
// let temporalyResult2 = [];

for (let i = 0; i < arrayAngabe.length; i++) {
  let word = arrayAngabe[i];

  let arrayWord = Array.from(word);

  let firstLetterWord = [];
  let secondLetterWord = [];

  console.log(arrayWord);

  for (let i = 0; i < arrayWord.length; i++) {
    let isConsonantLetter = false;
    let isVowelLetter = false;

    vowelLetter.some((letter) => {
      return console.log(letter === arrayWord[0], arrayWord[0]);
    })
      ? (isVowelLetter = true)
      : (isVowelLetter = false);
    consonantLetter.some((letter) => letter === arrayWord[0])
      ? (isConsonantLetter = true)
      : (isConsonantLetter = false);

    console.log(isVowelLetter);
    console.log(isVowelLetter);

    if ((isVowelLetter = false)) {
      temporalyResult.push(arrayWord.slice().join("") + angabe2);
      console.log(temporalyResult);
    } else if (isConsonantLetter) {
      firstLetterWord = arrayWord.shift();
      // console.log(arrayWord);

      if ((isConsonantLetter = false)) {
        secondLetterWord = arrayWord.shift();
      }

      if (firstLetterWord) {
        for (let i = 0; i < firstLetterWord.length; i++) {
          arrayWord.push(firstLetterWord[i]);
        }

        for (let i = 0; i < secondLetterWord.length; i++) {
          arrayWord.push(secondLetterWord[i]);
        }
      }
      console.log(arrayWord);
      let x = arrayWord.join("");

      console.log(x);
      temporalyResult.push(arrayWord.join("") + angabe2);
      console.log(temporalyResult);
      // console.log(temporalyResult1);
    }
  }
}

result = temporalyResult.join(" ");

console.log(result);
