import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const CounterWidget = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 rounded-xl border shadow bg-white">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-semibold">Counter</h2>
      </div>
      <p className="text-2xl mb-2">{count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count - 1)} className="bg-gray-100 p-2">
          <MinusIcon className="w-4 h-4" />
        </Button>
        <Button onClick={() => setCount(count + 1)} className="bg-gray-100 p-2">
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default CounterWidget;
