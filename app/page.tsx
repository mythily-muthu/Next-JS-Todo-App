import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
// import { useEffect } from "react";

export default async function Home() {
  let tasks = await getAllTodos();

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-10 bg-white">
      <div className="flex flex-col w-full  items-center justify-center ">
        <h1 className="font-bold text-5xl text-indigo-900 tracking-wider">
          ADD YOUR TO-DO WORKS HERE!
        </h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
