import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
// import { useEffect } from "react";

export default async function Home() {
  let tasks = await getAllTodos();

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-16 bg-orange-200">
      <div className="flex flex-col w-full py-8 items-center justify-center ">
        <h1 className="font-medium text-3xl text-orange-500">Todo List App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
