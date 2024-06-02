#! /usr/bin/env node 
import inquirer from "inquirer";
const inputFromUser = await inquirer.prompt([{
        type: "input",
        name: "paragraph",
        message: "Enter your paragraph to count numbers of letter and words in it:"
    }]);
const paragraphInput = inputFromUser.paragraph;
const letterWithoutSpace = paragraphInput.replace(/\s/g, "");
const letterCount = letterWithoutSpace.length;
const wordArray = paragraphInput.split(" ");
const wordCount = wordArray.length;
console.log(`Total letters in your paragraph are ${letterCount} and total numbers of words are ${wordCount}`);
