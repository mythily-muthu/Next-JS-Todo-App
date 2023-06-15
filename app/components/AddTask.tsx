"use client";

import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { addTodo } from "@/api";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: "3",
      text: newTaskValue,
    });
    setNewTaskValue("");
  };
  return (
    <div className="text-white flex  flex-col w-96 items-center justify-center p-8">
      <button
        onClick={() => setModalOpen(true)}
        className="w-full border-2  border-blue-800 py-2 rounded-md font-semibold text-blue-800 hover:bg-white "
      >
        AddTask
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg w-max">Add new task</h3>
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
