import { getTodos } from "@/services/todoService";

export function renderTodos(root: HTMLElement): void {
  root.innerHTML = "";
  const todos = getTodos();

  for (const id in todos) {
    const todo = todos[id];
    const li = document.createElement("li");
    li.innerHTML = `
         <div class="todo-details">
            <input 
                type="checkbox" 
                class="checkmark" 
                ${todo.completed ? "checked" : ""} 
                data-id="${todo.id}"
            >
            <p 
                class="todo-text" 
                id="title-${id}" 
                style="text-decoration: ${
                  todo.completed ? "line-through" : "none"
                }"
            >${todo.title}</p>
         </div>
         <button class="delete-btn" data-id="${todo.id}">
            Delete
         </button>
        `;
    root.appendChild(li);
  }
}
