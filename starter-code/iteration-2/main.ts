// 1. Create a class Todo that implements the Interface created before.

// Execution
let myTodos = new Todo();
myTodos.addTask('This is our first task');
myTodos.addTask('Eat pizza 🍕 yummy!!!');
myTodos.addTask('Finish this iteration 1!! 🤓');
myTodos.addTask('Finish this iteration 2!! 🤓');
myTodos.addTask('Finish this iteration 3!! 🤓');
myTodos.listAllTasks();
myTodos.deleteTask('Finish this iteration 1!! 🤓');
myTodos.deleteTask('Finish this iteration 2!! 🤓');
myTodos.listAllTasks();
