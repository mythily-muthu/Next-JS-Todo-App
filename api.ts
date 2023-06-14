import { ITask } from "./types/tasks";

let baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`);
  let todos = await res.json();
  return todos;
};
