import { renderTodos } from "@/views/todoView";
import { setupHandlers } from "@/handlers/todoHandler";

const form = document.getElementById("todo-form") as HTMLFormElement;
const list = document.getElementById("todo-list") as HTMLElement;

renderTodos(list);
setupHandlers(form, list);
