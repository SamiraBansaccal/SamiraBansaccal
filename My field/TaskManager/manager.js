// MY TASK MANAGER - TERMINAL
const task = ["caca","pipi"];
const menu = "Welcome to your task manager, Press: 1. to see all your tasks 2. to add a task 3. to delete a task 4. to mark a task as done 5. to Exit the task manager";

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


// EXEMPLE
const taskManager = () => {

  rl.question(menu, (number) => {
    if(parseInt.number===1){
      console.log(task);

    }else if(parseInt.number===2){
      console.log(task);
      taskManager();
    }else if(parseInt.number===3){
      console.log(task);
      taskManager();
    }else if(parseInt.number===4){
      console.log(task);
      taskManager();
    }else if(parseInt.number===5){
      rl.close();
    }else {
      taskManager();
    }
  })

}

taskManager();
