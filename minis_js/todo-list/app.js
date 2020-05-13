// SELECTOR
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// EVENTS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' ,deleteCheck);


// FUNCTIONS
function addTodo (e) {
    // prevent the form on submitting
    e.preventDefault();
    // create new div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
  //create new li
   const newTodo = document.createElement("li");
   newTodo.classList.add("todo-item");
   newTodo.textContent = todoInput.value
   todoDiv.appendChild(newTodo);
 // create a checkmark button
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<li class="fas fa-check"> </li>'
   todoDiv.appendChild(completeButton);
   completeButton.classList.add('complete-btn')
    // create a trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"> </li>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
 //append the todoDiv to ul
    todoList.appendChild(todoDiv);
// clear the input value
   todoInput.value = ""
}

function deleteCheck(e){
  const item = e.target
  const div = item.parentElement
  if (item.classList[0] == 'trash-btn'){
    div.remove();
   //  complete mark
  } else if (item.classList[0] === 'complete-btn') {
     div.classList.toggle('completed')
  }
}