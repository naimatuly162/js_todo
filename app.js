





//
// //function declaration
//
// function sayHi() {
//     alert("Hello");
// }
// //function expression
// let sayHii = function (){
//     alert("hi");
// }
//
// let age = prompt("What is your age?", 18);
// //
// // let welcome;
// // if (age<18) {
// //     welcome =function (){
// //         alert("hello");
// //     };
// //
// // }else {
// //     welcome = function (){
// //         alert("Greetings!");
// //     }
// // }
// let welcome = (age < 18) ?
//     function() { alert("Hello!") ; } :
//     function() {alert("greetings") ; };
// welcome();


// const users = [
//     {
//         name: "User 1",
//         age: 20
//     },
//     {
//         name: "User 2",
//         age: 50
//     },
//     {
//         name: "User 3",
//         age: 10,
//         isValid: true
//     },
//     {
//         name: "User 5",
//         age: 80
//     }
// ];
//
//
//
// // Find the users who has the value true for isValid
// const result2 = users.filter(function (word) {
//     return word.isValid ;
// })
//
// console.log(result2);
//
//
// // Find the users who is older than 10
// const result = users.filter(function (word){
//     return word.age > 10;
// })
// console.log(result);
//
//
// // Make a new array by modifying the name of each user to upper case
// const result3 = users.map(function (name, index, array) {
//     array = name.name.toUpperCase();
//     return array;
// });
// console.log(result3);
//
//
//
// let allKeys =[];
//
// // List all unique keys from the list of users
//
// const result4 = users.forEach(function (user, index) {
//     allKeys = users.concat(Object.keys(user));
//     console.log(allKeys)
//
// })
//
// let unique = [];
// allKeys.forEach(function (user){
//
// })
//
// console.log(unique);
// console.log(result4)

//
// let vege = ['Cucumber', 'Carrot','Tomato','Cabbage']
// console.log(vege)
//
// let pos = 0;
// let n =2 ;
//
// let removeItem = vege.splice(pos, n)
//
// console.log(vege)
//
// console.log(removeItem)
//
// let copy = vege.slice()
// console.log(copy)
// console.log(vege)
//
//
// //marging arrays
//
// let vege1 = ['potato', 'carrot']
// let vege2 = ['cucumber', 'spinach']
// vege1 = vege1.concat(vege2)
// // vege1.push(vege2);
// console.log(vege1);
//
// //concatenating nested arrays
// const num1 = [[1]];
// const num2 = [2,[3]];
// num1[0].push(4);
// let num3 = num1.concat(num2);
// console.log(num3)


// var x = ['a', 'b', 'c']


//
//
//
// //Selectors
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector('.todo-button');
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");
//
// //events
// todoButton.addEventListener('click', addTodo);
//
// todoList.addEventListener('click', deleteTodo);
// filterOption.addEventListener('click', filterTodo);
// document.addEventListener('DOMContentLoaded', getTodo);
//
// functions
//
// function addTodo(event) {
//     //Prevent form from submitting
//     event.preventDefault()
//
//     //Todo DIV
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//
//     //create Li
//     const newTodo = document.createElement('li');
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);
//
//     //saveLocalStorage
//
//     saveTodo(todoInput.value);
//
//     //CHECK MARK BUTTON
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML = '<i class="fas fa-check"></i>'
//     completedButton.classList.add('complete-btn');
//     todoDiv.appendChild(completedButton);
//
//     //CHECK trash BUTTON
//     const trashButton = document.createElement('button');
//     trashButton.innerHTML = '<i class="fas fa-trash" ></i>'
//     trashButton.classList.add('trash-btn');
//     todoDiv.appendChild(trashButton);
//
//     //Append to list
//     todoList.appendChild(todoDiv);
//
//     //Clear Todo INPUT
//     todoInput.value = "";
//
//     console.log('hello');
// }
//
// function deleteTodo(e) {
//     // console.log('sdfbaejksg', e);
//     const item = e.target;
//
//     //Delete TODO
//     if (item.classList[0] === "trash-btn") {
//         // item.remove();
//         //removeTodo(todo);
//         const todo = item.parentElement;
//         todo.remove();
//     }
//     //complete TODO
//     if (item.classList[0] === "complete-btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completed");
//     }
// }
//
// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     console.log(todos);
//     todos.forEach(function (todo) {
//         switch (e.target.value) {
//             case "all":
//                 todo.style.display = "block";
//                 break;
//             case "completed":
//                 if (todo.classList.contains('completed')) {
//                     todo.style.display = 'flex';
//                 } else {
//                     todo.style.display = 'none';
//                 }
//                 break;
//             case "pending":
//                 if (!todo.classList.contains('completed')) {
//                     todo.style.display = 'flex';
//                 } else {
//                     todo.style.display = 'none';
//                 }
//                 break;
//         }
//     });
// }
//
// function saveTodo(e) {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         // todos = "";
//         console.log(todos);
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(e);
//
//     localStorage.setItem('todos', JSON.stringify(todos));
//     console.log(todos);
// }
//
// // localStorage.clear();
//
// function getTodo() {
//     console.log('hello');
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//         console.log(todos);
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach(function (todo) {
//         //Todo DIV
//         const todoDiv = document.createElement("div");
//         todoDiv.classList.add("todo");
//
//         //create Li
//         const newTodo = document.createElement('li');
//         // console.log('todoInput.value',todoInput.value)
//         newTodo.innerText = todo;
//         newTodo.classList.add('todo-item');
//         todoDiv.appendChild(newTodo);
//
//         //CHECK MARK BUTTON
//         const completedButton = document.createElement('button');
//         completedButton.innerHTML = '<i class="fas fa-check"></i>'
//         completedButton.classList.add('complete-btn');
//         todoDiv.appendChild(completedButton);
//
//         //CHECK trash BUTTON
//         const trashButton = document.createElement('button');
//         trashButton.innerHTML = '<i class="fas fa-trash"></i>'
//         trashButton.classList.add('trash-btn');
//         todoDiv.appendChild(trashButton);
//
//         //Append to list
//         todoList.appendChild(todoDiv);
//     });
// }
// //
// // function removeTodo(todo) {
// //     let todos;
// //     if (localStorage.getItem("todos") === null) {
// //         todos = [];
// //     } else {
// //         todos = JSON.parse(localStorage.getItem("todos"));
// //     }
// //     const todoIndex = todo.children[0].innerText;
// //     todos.splice(todos.indexOf(todoIndex), 1);
// //     localStorage.setItem("todos", JSON.stringify(todos));
// // }
//
// // localStorage.clear();
//
//
//
//
