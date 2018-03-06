// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

myTodos.addTask(task1);
myTodos.addTask(task2);
myTodos.addTask(task3);
myTodos.addTask(task4);
myTodos.addTask(task5);
myTodos.listAllTasks();
myTodos.deleteTask(task3);
myTodos.deleteTask(task4);
myTodos.deleteTask(task5);
myTodos.listUncomplete();
