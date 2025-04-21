import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTitle,
} from "@/services/todoService";
import { renderTodos } from "@/views/todoView";

export function setupHandlers(form: HTMLFormElement, list: HTMLElement) {
  form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(form);
    const title = data.get("title") as string;
    if (title) {
      addTodo(title);
      renderTodos(list);
      form.reset();
    }
  });

  list.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    const id = target.getAttribute("data-id");
    if (!id) return;

    if (target.classList.contains("delete-btn")) {
      deleteTodo(id);
      renderTodos(list);
    }

    if (target.classList.contains("checkmark")) {
      toggleTodo(id, (target as HTMLInputElement).checked);
      renderTodos(list);
    }
  });

  list.addEventListener("dblclick", (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("todo-text")) {
      const id = target.id.replace("title-", "");
      const current = target.textContent || "";
      const newTitle = prompt("Edit todo title:", current);
      if (newTitle && newTitle.trim()) {
        updateTitle(id, newTitle.trim());
        renderTodos(list);
      }
    }
  });
}
