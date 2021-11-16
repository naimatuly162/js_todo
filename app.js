//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodo);


//functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault()

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //saveLocalStorage

    saveTodo(todoInput.value);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT
    todoInput.value = "";
    console.log('hello');
}

function deleteTodo(e) {
    console.log('sdfbaejksg', e);
    const item = e.target;
    //Delete TODO
    if (item.classList[0] === "trash-btn") {
        // item.remove();
        //removeTodo(todo);
        const todo = item.parentElement;
        todo.remove();
    }
    //complete TODO
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "block";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "pending":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveTodo(e) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
        console.log(todos);
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(e);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos);
}

// localStorage.clear();

function getTodo() {
    console.log('hello');
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
        console.log(todos);
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create Li
        const newTodo = document.createElement('li');
        // console.log('todoInput.value',todoInput.value)
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //CHECK MARK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        //CHECK trash BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //Append to list
        todoList.appendChild(todoDiv);
    });
}
//
// function removeTodo(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

//localStorage.clear();




