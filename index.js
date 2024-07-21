#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradientString from "gradient-string";
const sleep = async (ms = 2000) => {
    await new Promise((r) => {
        setTimeout(r, ms);
    });
};
let questions = ["What is the capital of France?", "Who wrote 'Romeo and Juliet'?", "What is the chemical symbol for gold?", "In which year did World War II end?", "What is the largest mammal on Earth?", "Who painted the Mona Lisa?", "Which planet is known as the 'Red Planet'?", "What is the currency of Japan?", "Who is the author of 'To Kill a Mockingbird'?", "What is the main ingredient in guacamole?"];
let correctAnswers = ["Paris", "William Shakespeare", "Au", "1945", "Blue Whale", "Leonardo da Vinci", "Mars", "Yen", "Harper Lee", "Avocado"];
figlet("Quiz", (error, data) => {
    console.log(gradientString.pastel.multiline(data));
});
await sleep(100);
let developer = chalkAnimation.rainbow("Made by Abdullah");
await sleep(1000);
developer.stop();
let github = chalkAnimation.neon("github.com/abdullahsheikh7/\n");
await sleep(1000);
github.stop();
while (true) {
    let correct = 0;
    let incorrect = 0;
    let answers = await inquirer.prompt([
        {
            name: "q1",
            type: "list",
            message: questions[0],
            choices: ["Madrid", "London", "Paris", "Berlin"]
        },
        {
            name: "q2",
            type: "list",
            message: questions[1],
            choices: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"]
        },
        {
            name: "q3",
            type: "list",
            message: questions[2],
            choices: ["Hg", "Au", "Fe", "Pb"]
        },
        {
            name: "q4",
            type: "list",
            message: questions[3],
            choices: ["1955", "1965", "1918", "1945"]
        },
        {
            name: "q5",
            type: "list",
            message: questions[4],
            choices: ["Blue Whale", "Hippopotamus", "Elephant", "Giraffe"]
        },
        {
            name: "q6",
            type: "list",
            message: questions[5],
            choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Rembrandt"]
        },
        {
            name: "q7",
            type: "list",
            message: questions[6],
            choices: ["Neptune", "Mars", "Venus", "Jupiter"]
        },
        {
            name: "q8",
            type: "list",
            message: questions[7],
            choices: ["Dollar", "Euro", "Yen", "Rupee"]
        },
        {
            name: "q9",
            type: "list",
            message: questions[8],
            choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"]
        },
        {
            name: "q10",
            type: "list",
            message: questions[9],
            choices: ["Tomato", "Onion", "Lime", "Avocado"]
        },
    ]);
    for (let i = 0; i < questions.length; i++) {
        if (answers[Object.keys(answers)[i]] === correctAnswers[i]) {
            correct++;
        }
        else {
            incorrect++;
        }
    }
    console.log(`\n${correct} correct\n${incorrect} incorrect\n`);
    let next = await inquirer.prompt([{
            name: "next",
            type: "list",
            message: "What you want to do next?",
            choices: ["Show answers", "Restart", "Exit"]
        }]);
    if (next.next === "Show answers") {
        questions.forEach((e, i) => {
            if (answers[Object.keys(answers)[i]] === correctAnswers[i]) {
                console.log(`${e}: ${chalk.green(answers[Object.keys(answers)[i]])}\n`);
            }
            else {
                console.log(`${e}: ${chalk.red(answers[Object.keys(answers)[i]])}\n`);
            }
        });
        console.log("");
        next = await inquirer.prompt([{
                name: "next",
                type: "list",
                message: "What you want to do next?",
                choices: ["Restart", "Exit"]
            }]);
        if (next.next === "Restart") {
            continue;
        }
        else {
            break;
        }
    }
    else if (next.next === "Restart") {
        continue;
    }
    else {
        break;
    }
}
