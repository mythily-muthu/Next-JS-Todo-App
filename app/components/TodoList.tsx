import { ITask } from "@/types/tasks";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* {tasks.map(() => (
            <tr>
              <td>Cy Ganderton</td>
              <td>Blue</td>
            </tr>
          ))} */}
          {tasks.map(task)=> (<tr>
            <td>Cy Ganderton</td>
            <td>Blue</td>
          </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
