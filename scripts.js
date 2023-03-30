"use strict";

// backslash obviates the semantic properties of certain characters from statements; &&, ===, and != are comparison operators, whereby a variable compares to a statement
// let answer1 = confirm("Are you ready to rumble?");
// if (answer1 === true) {
//   console.log("Let's get ready to rumble");
// } else {
//   console.log("Oh, well!");
// }

// let first = false;
// let second = false;
// let third = false;

// two pipes '||' mean 'or'
// if (first && third) {
//   console.log("first and third were both true!");
// } else if (first || second) {
//   console.log("first or second was true!");
// } else if (third) {
//   console.log("first and second were false but the third was true");
// } else {
//   console.log("Were any of my variables true");
// }

// let color = prompt("What is your favourite colour?");

// switch (color.toLocaleLowerCase()) {
//   case "red":
//     console.log("Your favourite colour is red");
//     break;
//   case "blue":
//     console.log("Your favourite colour is blue");
//     break;
//   case "green":
//     console.log("Your favourite colour is green");
//     break;
//   default:
//     console.log("I don't know what your favourite colour is");
//     break;
// }

alert("Welcome to my guessing game!");

let userScore = 0;

alert("You have " + userScore + " points to start.");

let student = prompt(
  "Is James a student? (Please answer either yes/no or y/n)"
);
if (student.toLowerCase() === "yes" || student.toLowerCase() === "y") {
  //  console.log("You're correct! James is currently a student.");
  userScore++;
  alert("You're correct! James is currently a student.");
} else {
  // console.log("Too bad! That's incorrect.");
  alert("Too bad! That's incorrect.");
}

let amphibian = prompt(
  "Does James work with slimy creatures in his spare time? (Please answer either yes/no or y/n)"
);
if (amphibian.toLowerCase() === "yes" || amphibian.toLowerCase() === "y") {
  //  console.log("That's right! James spends way too much time thinking about toads.");
  userScore++;
  alert("That's right! James spends way too much time thinking about toads.");
} else {
  // console.log("Not the greatest start...");
  alert("Not the greatest start...");
}

let retail = prompt(
  "Is James interested in a career in retail? (Please answer either yes/no or y/n)"
);
if (retail.toLowerCase() === "no" || retail.toLowerCase() === "n") {
  //  console.log("Well done! Very impressive.");
  userScore++;
  alert("Well done! Very impressive.");
} else {
  // console.log("Unlucky! That's the wrong asnwer");
  alert("Unlucky! That's the wrong answer.");
}

let coding = prompt("Is James currently learning to code?");
if (coding.toLowerCase() === "yes" || coding.toLowerCase() === "y") {
  //  console.log("You're on a roll! Impressive.");
  userScore++;
  alert("Super! That's right!");
} else {
  // console.log("Unlucky! That's the wrong asnwer");
  alert("You suck!");
}

function guessNumber() {
  const number = 7;
  let guess = prompt(
    "I'm thinking of a number between 1 and 10. Can you guess what it is?"
  );

  for (let i = 3; i >= 0; i--) {
    if (i == 0) {
      alert(
        "Unlucky! That was your final attempt. The number was " + number + "."
      );
      break;
    }
    if (guess < number) {
      alert("Too low, guess again.");
      guess = prompt(
        "Please guess the number I'm thinking of. You now have " +
          i +
          " attempts remaining."
      );
    } else if (guess > number) {
      alert("Too high, guess again.");
      guess = prompt(
        "Please guess the number I'm thinking of. You now have " +
          i +
          " attempts remaining."
      );
    } else {
      userScore++;
      alert("You've guessed the number correctly!");
      break;
    }
  }
}
guessNumber();

function guessSkill() {
  const skills = [
    "programming languages",
    "JavaScript",
    "creativity",
    "adaptability",
    "leadership",
    "policy design",
    "data analysis",
    "written & verbal communication",
    "languages",
    "problem-solving",
    "teamwork",
  ];
  let userGuess;
  let numberOfGuesses = 0;
  let correctGuess = false;
  do {
    userGuess = prompt("Name one of my top 10 skills.").toLowerCase().trim();
    if (skills.includes(userGuess)) {
      userScore++;
      alert("Correct answer!");
      correctGuess = true;
    } else {
      alert("Oops! try again.");
    }
    numberOfGuesses++;
  } while (numberOfGuesses < 6 && correctGuess === false);
  return correctGuess;
}
guessSkill();

let diploma = prompt(
  "Final question: does James have a degree in Business Management? (Please answer either yes/no or y/n)"
);
if (diploma.toLowerCase() === "no" || diploma.toLowerCase() === "n") {
  //  console.log("Woo! That's correct, thanks for completing the quiz!");
  userScore++;
  alert("Woo! That's correct.");
} else {
  // console.log("Better luck next time...");
  alert("Better luck next time...");
}

alert(
  "Thanks for completing the quiz! You have a score of " + userScore + "/7."
);
