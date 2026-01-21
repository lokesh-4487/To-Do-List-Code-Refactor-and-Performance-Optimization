// DOM Elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Load todos on page load
document.addEventListener('DOMContentLoaded', loadTodos);

// Event Listeners
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleActions);

// Add new todo
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const todo = {
        id: Date.now(),
        text
    };

    renderTodo(todo);
    saveTodo(todo);

    todoInput.value = '';
}

// Render todo item
function renderTodo({ id, text }) {
    const item = document.createElement('div');
    item.className = 'itemall';
    item.dataset.id = id;

    item.innerHTML = `
        <p class="item">${text}</p>
        <button class="check-button">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="trash-button">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    todoList.appendChild(item);
}

// Handle check & delete
function handleActions(e) {
    const parent = e.target.closest('.itemall');
    if (!parent) return;

    if (e.target.closest('.check-button')) {
        parent.classList.toggle('checklist');
    }

    if (e.target.closest('.trash-button')) {
        removeTodo(parent.dataset.id);
        parent.remove();
    }
}

// Local Storage
function saveTodo(todo) {
    const todos = getTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    getTodos().forEach(renderTodo);
}

function getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

function removeTodo(id) {
    const todos = getTodos().filter(todo => todo.id != id);
    localStorage.setItem('todos', JSON.stringify(todos));
}
