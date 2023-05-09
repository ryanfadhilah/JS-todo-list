
// selector
const todoInput = document.querySelector(".todo-input")

const todoButton = document.querySelector(".todo-button")

const todoList = document.querySelector(".todo-list")

// event listener
todoButton.addEventListener("click", addTodo)

// function
function addTodo(event) {
    event.preventDefault()
    console.log('helloooo')

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li')
    newTodo.innerText = "helllo!!"
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const compleatedButton = document.createElement('button')
    compleatedButton.innerHTML = '<i class="fas fa-check"></i>'
    compleatedButton.classList.add('complete-btn')
    todoDiv.appendChild(compleatedButton)

    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}