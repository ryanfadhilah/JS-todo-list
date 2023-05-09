
// selector
const todoInput = document.querySelector(".todo-input")

const todoButton = document.querySelector(".todo-button")

const todoList = document.querySelector(".todo-list")

// event listener
todoButton.addEventListener("click", addTodo)

todoList.addEventListener('click', deleteCheck)

// function
function addTodo(event) {
    event.preventDefault()
    console.log('clog : add elements')

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li')
    // newTodo.innerText = "helllo!!"
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const compleatedButton = document.createElement('button')
    compleatedButton.innerHTML = '<i class="fas fa-check"></i>'
    compleatedButton.classList.add('complete-btn')
    todoDiv.appendChild(compleatedButton)

    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-btn')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    todoInput.value = ""
}

function deleteCheck(e) {

    const item = e.target

    // delete 
    if (e.target.classList[0] === 'trash-btn') {

        todo = e.target.parentElement

        todo.classList.toggle('fall')
        todo.addEventListener('transitionend', function () {
            e.target.parentElement.remove()
        })
        console.log('clog : delete elements')

    }

    // check
    if (e.target.classList[0] === "complete-btn") {

        const todo = item.parentElement
        todo.classList.toggle('completed')
        todo.classList.toggle('testing')
        console.log('clog : check elements')
    }

}