import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [addedTask, setAddedTask] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    // console.log(task.length);
    setAddedTask([...addedTask, { id: Date.now(), text: task }]);
    setTask("");
  };

  const handleDelete = (item) => {
    console.log(item);
    console.log("hello");

    setAddedTask(addedTask.filter((task) => task.id != item.id));
  };
  console.log(addedTask);
  console.log(addedTask.length);
  return (
    <div className="flex flex-col items-center mx-auto">
      <h2 className="text-center my-5 text-2xl font-bold">Todo APP</h2>
      <div className="flex gap-5 m-5 items-center justify-center">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-2 border-2 rounded-md "
          type="text"
          name=""
          id=""
          placeholder="enter a task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-3xl text-white text-xl"
        >
          Add Task
        </button>
      </div>
      <div>
        {addedTask.length === 0 ? (
          <p className="text-2xl">No task yet.Add Task</p>
        ) : (
          <div>
            <p>Tasks are : </p>
            <ul className="list-decimal m-10">
              {addedTask.map((addTsk, index) => (
                <li
                  key={index}
                  className="mb-5 text-2xl shadow-2xl shadow-gray-600 flex justify-between w-full"
                >
                  <span className="mr-5"> {addTsk.text}</span>
                  <button
                    onClick={() => handleDelete(addTsk)}
                    className="bg-red-500 cursor-pointer px-6 py-3 rounded-md text-white"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
<h2>ToDo APP</h2>;
