let todoinput = document.querySelector('.todo-input');
let todobtn = document.querySelector('.todo-btn');
let todolist = document.querySelector(".todo-list")
let filteroption = document.querySelector('.filter')

//Eventlistners

todobtn.addEventListener('click', addtodo)
filteroption.addEventListener('click', filterTodo)

function addtodo(event) {
    // creating div

    event.preventDefault();
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')

    //creating li

    const Newtodo = document.createElement('li')
    Newtodo.innerText = todoinput.value;
    localStorage.setItem("todo", todoinput.value)
    Newtodo.classList.add('todo-item')
    tododiv.appendChild(Newtodo)

    //completed-btn

    const completedbtn = document.createElement('button');
    completedbtn.classList.add('complete-btn')
    completedbtn.innerHTML = '<i class = "fas fa-check"></i>'
    tododiv.appendChild(completedbtn)

    //trash-btn
    const trashbtn = document.createElement('button');
    trashbtn.classList.add('trash-btn')
    trashbtn.innerHTML = '<i class="fas fa-trash"></i>'
    tododiv.appendChild(trashbtn)

    todolist.append(tododiv)

    // clearing value
    todoinput.value = "";

    //Delete btn 

    trashbtn.addEventListener('click', deletetodo)

    function deletetodo() {
        tododiv.remove();
    }


    // check-btn
    completedbtn.addEventListener('click', checked)

    function checked() {
        tododiv.classList.toggle('completed')
    }
}

// filter section

function filterTodo(e) {
    const todos = todolist.childNodes
        // console.log(todos)
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
        }
    })

}


// local storage