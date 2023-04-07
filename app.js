///////////////////////////////////
// function
///////////////////////////////////
const addTodo = (ev) => {
    ev.preventDefault()
    console.log('addTodo function')

    // div todoDiv 'todo'
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('.todo')

    // li newTodo 'todo-item'
    const newTodo = document.createElement('li')
    newTodo.classList.add('.todo-item')
    newTodo.innerText = 'test text'
    todoDiv.appendChild(newTodo)

    // i completedButton '<i class="fas fa-check"></i>'
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completedButton)

    // i trashButton '<i class="fas fa-trash"></i>'
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)





}


///////////////////////////////////
// selectors
///////////////////////////////////

const todoButton = document.querySelector('.todo-button')

const todoList = document.querySelector('.todo-list')



///////////////////////////////////
// event listener
///////////////////////////////////
todoButton.addEventListener('click', addTodo)


