#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;

console.log(chalk.bgYellowBright.bold("\n \t Welcome to Faryal - Todo-List Application \n"));

while(conditions){ 
   let addTask = await inquirer.prompt([
     {     
      name: "task",
     type: "input",
     message: chalk.bgCyan.bold("Enter your New Task :")
     }
   ]);
   todolist.push(addTask.task);
   console.log(`${addTask.task}Task added in Todo-List successfully`);

   let addMoreTask = await inquirer.prompt([
       {
        name: "addmore",
        type: "confirm",
        message: chalk.bgGreenBright.bold("Do you want to add more task ?"),
        default: "False"
       }
   ]);
   conditions = addMoreTask.addmore
}
console.log("Your updated Todo-List:" , todolist);


        

     
