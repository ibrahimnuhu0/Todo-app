const todoList = [
  ];

renderTodoList();

function renderTodoList () {

let todoRender = '';

todoList.forEach(function(todo, index) {

const {name, dueDate} = todo;

const html = `
<div>${name}</div>
<div>${dueDate}</div>
<button  
" class="delete-todo-button js-delete-todo-button">Delete</button>`;
todoRender += html;
});

document.querySelector('.js-todo-list').innerHTML = todoRender;

document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', ()=>{
      todoList.splice(index, 1);
      renderTodoList(); 
    });
  });

}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
  addTodo();
})


function addTodo () {
const inputElement =  document.querySelector('.js-name-input');
const name =  inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');

const dueDate = dateInputElement.value;

todoList.push({name,
  dueDate
});


inputElement.value = '';

renderTodoList();
}