import { useState } from "react";
import { CloudIcon, HomeIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const WeatherWidget = () => {
  const [city, setCity] = useState("Ho Chi Minh City");
  const [unit, setUnit] = useState("C");
  const temperatureC = 27;
  const showTemp =
    unit === "C"
      ? `${temperatureC}°C`
      : `${((temperatureC * 9) / 5 + 32).toFixed(1)}°F`;

  return (
    <div className="p-4 rounded-xl border bg-white shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CloudIcon className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold text-lg">Weather</h2>
        </div>
        <Button
          className="text-black-600 text-sm px-3 border"
          onClick={() => setUnit(unit === "C" ? "F" : "C")}
        >
          °{unit === "C" ? "F" : "C"}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-1 mb-2">
        <HomeIcon className="w-4 h-4 text-red-700" />
        <span className="font-medium">{city}</span>
      </div>

      <div className="flex items-center justify-center gap-1">
        <span className="text-2xl">🌙</span>
        <span className="text-2xl font-semibold tracking-tight">
          {showTemp}
        </span>
      </div>
    </div>
  );
};

export default WeatherWidget;
