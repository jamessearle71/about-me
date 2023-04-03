"use strict";

alert("Welcome to my guessing game!");

let userScore = 0;

alert("You have " + userScore + " points to start.");

function questionOne() {
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
}
questionOne();

function questionTwo() {
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
}
questionTwo();

function questionThree() {
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
}
questionThree();

function questionFour() {
  let coding = prompt(
    "Is James currently learning to code? (Please answer either yes/no or y/n)"
  );
  if (coding.toLowerCase() === "yes" || coding.toLowerCase() === "y") {
    //  console.log("You're on a roll! Impressive.");
    userScore++;
    alert("Super! That's right!");
  } else {
    // console.log("Unlucky! That's the wrong asnwer");
    alert("You suck!");
  }
}
questionFour();

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

function questionSeven() {
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
}
questionSeven();
