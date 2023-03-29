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

let student = prompt(
  "Is James a student? (Please answer either yes/no or y/n)"
);
if (student.toLowerCase() === "yes" || student.toLowerCase() === "y") {
  //  console.log("You're correct! James is currently a student.");
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
  alert("That's right! James spends way too much time thinking about toads.");
} else {
  // console.log("Too bad! That's incorrect.");
  alert("Too bad! That's incorrect.");
}

let politics = prompt(
  "Is James interested in a career in politics? (Please answer either yes/no or y/n)"
);
if (student.toLowerCase() === "yes" || student.toLowerCase() === "y") {
  //  console.log("You're on a roll! Impressive.");
  alert("You're on a roll! Impressive.");
} else {
  // console.log("Unlucky! That's the wrong asnwer");
  alert("Unlucky! That's the wrong answer.");
}

let diploma = prompt(
  "Final question: does James have a diploma in Human Resource Practice? (Please answer either yes/no or y/n)"
);
if (student.toLowerCase() === "yes" || student.toLowerCase() === "y") {
  //  console.log("Woo! That's correct, thanks for completing the quiz!");
  alert("Woo! That's correct, thanks for completing the quiz!");
} else {
  // console.log("Better luck next time...");
  alert("Better luck next time...");
}
