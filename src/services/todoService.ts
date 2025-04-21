import { Todo } from "@/types/todo";
import { load, save } from "@/utils/storage";

const STORAGE_KEY = "todos";

let todos: Record<string, Todo> = load(STORAGE_KEY, {});

export function getTodos(): Record<string, Todo> {
  return todos;
}

export function addTodo(title: string): void {
  const id = crypto.randomUUID();
  todos[id] = { id, title, completed: false };
  save(STORAGE_KEY, todos);
}

export function deleteTodo(id: string): void {
  delete todos[id];
  save(STORAGE_KEY, todos);
}

export function toggleTodo(id: string, completed: boolean): void {
  todos[id].completed = completed;
  save(STORAGE_KEY, todos);
}

export function updateTitle(id: string, title: string): void {
  todos[id].title = title;
  save(STORAGE_KEY, todos);
}
