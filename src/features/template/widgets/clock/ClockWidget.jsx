import { useEffect, useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState("24");
  const [showSeconds, setShowSeconds] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: format === "12",
    ...(showSeconds && { second: "2-digit" }),
  };

  return (
    <div className="p-4 rounded-xl border shadow bg-white space-y-2">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1">
          <ClockIcon className="w-5 h-5 text-blue-500" />
          <h2 className="font-semibold">Clock</h2>
        </div>
        <div className="flex gap-2">
          <Button
            className="text-sm bg-green-100 text-green-800"
            onClick={() => setFormat((prev) => (prev === "24" ? "12" : "24"))}
          >
            {format === "24" ? "Switch to 12h" : "Switch to 24h"}
          </Button>
          <Button
            className="text-sm bg-blue-100 text-blue-800"
            onClick={() => setShowSeconds((prev) => !prev)}
          >
            {showSeconds ? "Hide Seconds" : "Show Seconds"}
          </Button>
        </div>
      </div>
      <p className="text-lg font-mono">
        {time.toLocaleTimeString([], timeOptions)}
      </p>
    </div>
  );
};

export default ClockWidget;
