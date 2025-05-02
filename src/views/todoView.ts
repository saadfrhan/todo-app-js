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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
         </button>
        `;
    root.appendChild(li);
  }
}
