import { useState } from "react";

const TodoWidget = () => {
  const [todos, setTodos] = useState([
    { text: "Do exercise", done: false },
    { text: "Write code, prepare presentation", done: false },
    { text: "Write journal", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleChangeNewTask = (e) => {
    setNewTask(e.target.value.trim());
  };

  const handleAddTask = () => {
    if (newTask !== "") {
      setTodos((prev) => [
        ...prev,
        {
          text: newTask,
          done: false,
        },
      ]);
      setNewTask("");
    }
  };

  const toggle = (index) => {
    setTodos((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="text-left p-4 rounded-xl border shadow">
      <h4 className="font-semibold mb-2">Todo List</h4>
      <ul className="mb-4">
        {todos.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="cursor-pointer truncate overflow-hidden whitespace-nowrap"
            onClick={() => toggle(index)}
          >
            <input type="checkbox" checked={item.done} readOnly />
            <span className={item.done ? "line-through ml-2" : "ml-2"}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={handleChangeNewTask}
          className="flex-1 px-2 py-1 border rounded text-sm"
          placeholder="Add new task..."
        />
        <button
          onClick={handleAddTask}
          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoWidget;
