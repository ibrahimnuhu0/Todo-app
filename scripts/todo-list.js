const todoList = [
  ];

renderTodoList();

function renderTodoList () {

let todoRender = '';

for ( let i = 0; i < todoList.length; i++){
const todo = todoList[i];
const {name, dueDate} = todo;

const html = `
<div>${name}</div>
<div>${dueDate}</div>
<button onclick="
todoList.splice(${i}, 1);
renderTodoList(); 
" class="delete-todo-button">Delete</button>`;
todoRender += html;
}

console.log(todoRender);

document.querySelector('.js-todo-list').innerHTML = todoRender;

}

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