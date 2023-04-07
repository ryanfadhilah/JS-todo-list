///////////////////////////////////
// function
///////////////////////////////////
function add_todo(event) {
    event.preventDefault()
    console.log("hello wordl")

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('.todo')

    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = 'test'
    todoDiv.appendChild(newTodo)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)


}


///////////////////////////////////
// selectors
///////////////////////////////////

// input  
const todoInput = document.querySelector('.todo-input')

// button  
const todoButton = document.querySelector('.todo-button')

// ul  
const todoList = document.querySelector('.todo-list')


///////////////////////////////////
// event listener
///////////////////////////////////
todoButton.addEventListener("click", add_todo)

