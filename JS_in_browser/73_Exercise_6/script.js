/*

Create a TODO List app capable of storing your TODOs in LocalStorge.
Add an option to create, delete and access all the TODOs.

Try to make UI as good as possible.

*/

// Get DOM elements
const input = document.getElementById("todo");
const button = document.getElementById("add");
const list = document.getElementById("todoList"); // <ul id="todoList"></ul>

// Load todos safely from localStorage
let todos = [];

try {
    const saved = localStorage.getItem("todos");
    todos = saved ? JSON.parse(saved) : [];
} catch (error) {
    todos = [];
    localStorage.removeItem("todos");
}

// Save todos to localStorage
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Render todos on the page
function renderToDos() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-300/10 text-black text-lg px-4 py-2 rounded-lg shadow-md w-[23vw] transition-all"
        li.textContent = todo;

        const delBtn = document.createElement("button");
        delBtn.className = "bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500 transition"
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteToDo(index);

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

// Add new todo
function addToDo() {
    const text = input.value.trim();
    if (text === "") return;

    todos.push(text);
    saveToDos();
    renderToDos();
    input.value = "";
}

// Delete todo
function deleteToDo(index) {
    todos.splice(index, 1);
    saveToDos();
    renderToDos();
}

// Event listener
button.addEventListener("click", addToDo);

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") addToDo();
})

// Initial render
renderToDos();
