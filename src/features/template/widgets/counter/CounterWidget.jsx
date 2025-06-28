import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const CounterWidget = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow bg-white">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-semibold">Counter</h2>
      </div>
      <p className="text-2xl mb-2">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-gray-100 p-2 rounded"
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-gray-100 p-2 rounded"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CounterWidget;
