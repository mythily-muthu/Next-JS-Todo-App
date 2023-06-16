"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    // setTaskToEdit(""); // reset
    setOpenModalEdit(false);
    router.refresh();
  };
  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <td className="uppercase w-full">{task.text}</td>
      <td className="flex gap-x-7">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          size={16}
          className="text-blue-800 cursor-pointer hover:text-blue-400"
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg w-max">Edit task</h3>
            <div className="modal-action ">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input  w-full border border-green-900"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          size={16}
          className="text-red-700 cursor-pointer  hover:text-red-400"
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg text-red-700">
            Are you sure you want to delete?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
