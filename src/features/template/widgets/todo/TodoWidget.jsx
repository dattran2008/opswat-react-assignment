import { useState } from "react";

const TodoWidget = () => {
  const [todos, setTodos] = useState([
    { text: "Do exercise", done: false },
    { text: "Write code, prepare presentation", done: false },
    { text: "Write journal", done: false },
  ]);

  const toggle = (index) =>
    setTodos((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );

  return (
    <div className="text-left p-4 rounded-xl border shadow">
      <h4 className="font-semibold mb-2">Todo List</h4>
      <ul>
        {todos.map((item, index) => (
          <li
            key={index}
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
    </div>
  );
};

export default TodoWidget;
