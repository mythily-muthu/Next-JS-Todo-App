"use client";

import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  // handle submit while enter add task button
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("value:", newTaskValue);
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue(""); // reset
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div className="text-white flex  flex-col w-96 items-center justify-center py-6">
      <button
        onClick={() => setModalOpen(true)}
        className="w-full border-2  border-blue-800 py-2 rounded-md font-semibold text-blue-800 hover:bg-indigo-100 "
      >
        ADD NEW TASK
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg w-max">Add a task</h3>
          <div className="modal-action ">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;
