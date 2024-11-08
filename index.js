#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Wellcome to CLI GUESSING NUMBER GAME\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-5:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed a right Number");
}
else {
    console.log("Try Again! You guessed wrong Number");
}
