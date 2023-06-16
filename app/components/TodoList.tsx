import { ITask } from "@/types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  console.log("tasks", tasks);
  return (
    <div className="overflow-x-auto w-1/2">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="text-lg text-orange-950 bg-slate-100">
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
