interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

let todos: { [id: string]: Todo } = JSON.parse(localStorage.getItem("todos") || "{}");

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";
  for (const id in todos) {
    const todo = todos[id];
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
      <div class="todo-details">
        <input type="checkbox" class="checkmark" ${todo.completed ? "checked" : ""} data-id="${todo.id}">
        <p class="todo-text" style="text-decoration: ${todo.completed ? "line-through" : "none"}">${todo.title}</p>
      </div>
      <button class="delete-btn" data-id="${todo.id}">Delete</button>
    `;
    todoList.appendChild(todoItem);
  }
}

function onSubmit(event: SubmitEvent) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const data = new FormData(form);
  const todoTitle = data.get("title") as string;

  if (todoTitle) {
    const id = Date.now().toString();
    todos[id] = { id, title: todoTitle, completed: false };
    saveTodos();
    renderTodos();
    form.reset();
  }
}

todoList.addEventListener("click", function (event: Event) {
  const target = event.target as HTMLElement;
  const id = target.getAttribute("data-id");

  if (target.classList.contains("delete-btn") && id) {
    delete todos[id];
    saveTodos();
    renderTodos();
  }

  if (target.classList.contains("checkmark") && id) {
    todos[id].completed = (target as HTMLInputElement).checked;
    saveTodos();
    renderTodos();
  }
});

todoForm.addEventListener("submit", onSubmit);

renderTodos();