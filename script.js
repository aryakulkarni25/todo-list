// Get references to HTML elements
const todoList = document.getElementById('todo-list');
const addTodoBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const clearBtn = document.getElementById('clear-btn');

// Function to render the todo list
function renderTodoList() {
  // Clear the current list
  todoList.innerHTML = '';

  // Render each todo item
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('li');
    const todoText = document.createTextNode(`${i}: ${todos[i]}`);
    const deleteBtn = document.createElement('button');

    // Set delete button properties
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function () {
      deleteTodoItem(i);
    });

    // Append todo text and delete button to the list item
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    // Append the list item to the todo list
    todoList.appendChild(todoItem);
  }
}

// Function to add a new todo
function addTodo() {
  const newTodo = todoInput.value.trim();

  if (newTodo !== '') {
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
    renderTodoList();
    todoInput.value = '';
  }
}

// Function to delete a todo item
function deleteTodoItem(index) {
  if (index >= 0 && index < todos.length) {
    const deleted = todos.splice(index, 1);
    console.log(`Okay, deleted ${deleted[0]}`);
    renderTodoList();
  } else {
    console.log('Unknown index');
  }
}

// Function to clear all todos
function clearTodos() {
  todos = [];
  renderTodoList();
}

// Add Event listeners
addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keyup', function(event) {
if (event.key === 'Enter') {
addTodo();
}
});
clearBtn.addEventListener('click', clearTodos);

// Render the initial todo list
renderTodoList();

// Replace the console.log statements with appropriate DOM manipulations to display the result on the webpage.
