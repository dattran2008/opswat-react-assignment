import { CloudIcon } from "@heroicons/react/24/outline";

const WeatherWidget = () => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <div className="flex items-center gap-2 mb-2">
        <CloudIcon className="w-5 h-5 text-blue-400" />
        <h2 className="font-semibold">Weather</h2>
      </div>
      <p className="text-sm text-gray-700">HCMC, 29°C - Sunny</p>
    </div>
  );
};

export default WeatherWidget;
