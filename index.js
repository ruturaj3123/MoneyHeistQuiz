
var readlineSync = require("readline-sync");
const chalk = require('chalk');

function Play(question, correctOption, answer, options) {
  var userAnswer = readlineSync.question(chalk.blue(question) + options);
  if (userAnswer.toLowerCase() === correctOption.toLowerCase()) {
    console.log(chalk.green("Correct!"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("Wrong!"));
    console.log(chalk.green("Correct answer: ") + answer)
  }
  console.log("Score: " + chalk.magenta(score) + "\n");

}

question1 = {
  question: "1)How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain? \n",
  options: "a) 8 \n" + "b) 9 \n" + "c) 10 \n" + "d) 11 \nChoose your option: ",
  correctOption: "a",
  answer: "a) 8"
}

question2 = {
  question: "2)Inspector Raquel’s mother suffers from what medical condition? \n",
  options: "a) Alzheimer’s Disease \n" + "b) Paranoid Schizophrenia \n" + "c) Post-Traumatic Stress Disorder \n" + "d) Cancer \nChoose your option: ",
  correctOption: "a",
  answer: "a) Alzheimer’s Disease"
}

question3 = {
  question: "3)How much currency does the gang print at the Royal Mint? \n",
  options: "a) 879 million euros \n" + "b) 926 million euros \n" + "c) 984 million euros \n" + "d) 777 million euros \nChoose your option: ",
  correctOption: "c",
  answer: "c) 984 million euros"
}
question4 = {
  question: "4)The Professor’s first name is eventually revealed. What is it? \n",
  options: "a) Andrés \n" + "b) Aníbal \n" + "c) Sergio\n" + "d) Racquel \nChoose your option: ",
  correctOption: "c",
  answer: "c) Sergio"
}
question5 = {
  question: "5) Before giving up on society and turning to a life of crime, what was Moscow’s occupation? \n",
  options: "a) Hacker \n" + "b) Soldier \n" + "c) Miner \n" + "d) Clerk \nChoose your option: ",
  correctOption: "c",
  answer: "c) Miner"
}
question6 = {
  question: "6)The show is actually called La Casa de Papel, which literally translates to what? \n",
  options: "a) The Paper House \n" + "b) The Outcasts \n" + "c) The House of Outcasts \n" + "d) The House \nChoose your option: ",
  correctOption: "a",
  answer: "a) The Paper House"
}
question7 = {
  question: "7)In which country does Raquel track the Professor after the first heist? \n",
  options: "a) Philippines \n" + "b) Thailand \n" + "c) China \n" + "d) Malaysia \nChoose your option: ",
  correctOption: "a",
  answer: "a) Philippines"
}
question8 = {
  question: "8)“Let the matriarchy begin”: Whose words are these? \n",
  options: "a) Tokyo \n" + "b) Nairobi \n" + "c) Raquel \n" + "d) Professor \nChoose your option: ",
  correctOption: "b",
  answer: "b) Nairobi"
}
question9 = {
  question: "9)In the first heist, which one of Angel’s belongings did the gang implant with a bug? \n",
  options: "a) Purse \n" + "b) Phone \n" + "c) Glasses \n" + "d) Handcuffs \nChoose your option: ",
  correctOption: "c",
  answer: "c) Glasses"
}
question10 = {
  question: "10)Who is the most annoying character? \n",
  options: "a) Alicia \n" + "b) Gandia \n" + "c) Arturo \n" + "d) Angel \nChoose your option: ",
  correctOption: "c",
  answer: "c) Arturo"
}

// main

console.log("Welcome to the " + chalk.red("Money Heist Fan Quiz! \n"))
console.log("What started off as a mini-series has now turned into a five-season extravaganza thanks to its popularity.\nDo you think you are a " + chalk.red("Money Heist ") + "fan? Take this quiz to find out. \n")

var start = readlineSync.question("Do you want to Continue? [Y/N] : ");

if (start.toLowerCase() === "y") {
  var userName = readlineSync.question("\nTell us your name : ");
  console.log("\nCool " + userName + "!\n" + chalk.red("Let the Heist Begin!!\n"));


  var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
  var numOfQuestions = questionList.length;

  var score = 0;
  for (var i = 0; i < numOfQuestions; i++) {
    var currentQuestion = questionList[i];
    Play(currentQuestion.question, currentQuestion.correctOption, currentQuestion.answer, currentQuestion.options);
  }

  console.log("You scored " + chalk.magenta(score) + " out of " + chalk.red("10") + ".");

  var highScore = 7;
  if (score >= highScore) {
    console.log(chalk.red("Bella Ciao ") + userName + "! You made a high score. You are truly a big fan!\n");
  }
  else {
    console.log("You need to watch the show again!")
  }

  console.log("-------------------------------------------------");
  console.log(chalk.cyan("High Scores :"))
  if (score >= highScore) {
    console.log(chalk.yellow(userName + " : " + score));
  }
  console.log(chalk.yellow("Vaibhav : 7"));
  console.log(chalk.yellow("Prasad : 7") + "\n\n")
  console.log("*Note: If you have made high score, please send me a screenshot so that I can update in my database.")

}
else {
  console.log(chalk.red("No problemo. hasta luego amigo"));
}