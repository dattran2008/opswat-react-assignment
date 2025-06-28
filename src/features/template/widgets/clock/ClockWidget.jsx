import { useEffect, useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 border rounded shadow bg-white">
      <div className="flex items-center gap-2 mb-2">
        <ClockIcon className="w-5 h-5 text-blue-500" />
        <h2 className="font-semibold">Clock</h2>
      </div>
      <p className="text-lg font-mono">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockWidget;
