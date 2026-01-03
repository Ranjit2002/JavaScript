const title = document.getElementById("title")
const desc = document.getElementById("desc")
const submit = document.getElementById("submit")
const Delete = document.getElementById("deleteBtn")
const todo = document.getElementById("todo")

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     let titlec = title.value
//     let descc = desc.value
//     localStorage.setItem("todo", JSON.stringify([titlec, descc]))
//     console.log(e);
//     todo.innerHTML = `
//     <h1>${titlec}</h1>
//     <p>${descc}</p>
//     `
//     title.value = "";
//     desc.value = "";
// })


Delete.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todo")
    todo.innerHTML = "";
})

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let titlec = title.value.trim();
    let descc = desc.value.trim();

    if (!titlec && !descc) return;

    // Load existing todos or empty array
    const todos = JSON.parse(localStorage.getItem("todo")) || [];

    // Add new todo
    todos.push({ title: titlec, desc: descc });

    // Save back to localStorage
    localStorage.setItem("todo", JSON.stringify(todos));

    // Render all todos
    renderTodos(todos);

    // Clear input
    title.value = "";
    desc.value = "";
});

function renderTodos(todos) {
    todo.innerHTML = ""; // clear previous display

    todos.forEach((t) => {
        todo.innerHTML += `
            <div class="todo-item">
                <h1>${t.title}</h1>
                <p>${t.desc}</p>
            </div>
        `;
    });
}

// Load todos on page load
document.addEventListener("DOMContentLoaded", () => {
  const todos = JSON.parse(localStorage.getItem("todo")) || [];
  renderTodos(todos);
});

