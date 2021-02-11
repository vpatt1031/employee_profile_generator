// const inquirer = require("inquirer");
// const employee = require("employee");



  

//   // Asks the user if to put in their information
//   askForInformation() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "name",
//           message: "What is your name?"
//         },
//         {
//             type: "input",
//             name: "id number",
//             message: "Enter your ID number."
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter your email addresss."
//         },
        
//       ])
//       .then(val => {
//         // If the user says yes to another game, play again, otherwise quit the game
//         if (val.choice) {
//           this.play();
//         } else {
//           this.quit();
//         }
//       });
//   }

//   // Prompts the user for a letter
//   askForLetter() {
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "choice",
//           message: "Guess a letter!",
//           // The users guess must be a number or letter
//           validate: val => /[a-z1-9]/gi.test(val),          
//         }
//       ])
//       .then(val => {
//         // If the user's guess is in the current word, log that they chose correctly
//         const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
//         if (didGuessCorrectly) {
//           console.log(chalk.green("\nCORRECT!!!\n"));

//           // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
//         } else {
//           this.guessesLeft--;
//           console.log(chalk.red("\nINCORRECT!!!\n"));
//           console.log(this.guessesLeft + " guesses remaining!!!\n");
//         }

//         console.log(this.currentWord.toString() + "\n");
//       });
//   }

//   // Logs goodbye and exits the node app
//   quit() {
//     console.log("\nGoodbye!");
//     process.exit(0);
//   }
// }

// module.exports = Game;

const fs = require("fs")
const renderHtml = require("./htmlRenderer")
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer")

let employees = []
inquirer.prompt([
    {
        type: "input",
        message: "What is the new employee's name",
        name:"newName"
    },
    {
        type: "input",
        message: "What is the new employee's id",
        name:"newId"
    },
    {
        type: "input",
        message: "What is the new employee's email",
        name:"newEmail"
    },
    {
        type: "input",
        message: "What is the new employee's github",
        name:"newGithub"
    },
]).then(response => {
    let newEmp = new Engineer(response.newName, response.newId, response.newEmail, response.newGithub)
    employees.push(newEmp)
    console.log(employees)
    
    fs.writeFile("index.html", renderHtml(employees), err => {
        if(err) throw err
    })
})
