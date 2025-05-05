const todoList = [{name:'nuhu', dueDate: '2020-12-22'}
  ];

renderTodoList();

function renderTodoList () {

let todoRender = '';

todoList.forEach(function(todo, index) {

const {name, dueDate} = todo;

const html = `
<div>${name}</div>
<div>${dueDate}</div>
<button onclick="
todoList.splice(${index}, 1);
renderTodoList(); 
" class="delete-todo-button">Delete</button>`;
todoRender += html;
});

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