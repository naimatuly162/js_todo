
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);


function addTodo(event){
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

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check" ></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash" ></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT
    todoInput.value= "";
    console.log('hello');
}
function deleteTodo(e){

    console.log('sdfbaejksg',e);
    const item = e.target;

    //Delete TODO
    if(item.classList[0] === "trash-btn"){
        // item.remove();
        const todo = item.parentElement;
        todo.remove();
    }
    //complete TODO
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
