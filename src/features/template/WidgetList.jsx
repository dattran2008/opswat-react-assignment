import ClockWidget from "./widgets/clock/ClockWidget.jsx";
import CounterWidget from "./widgets/counter/CounterWidget.jsx";
import WeatherWidget from "./widgets/weather/WeatherWidget.jsx";
import TodoWidget from "./widgets/todo/TodoWidget.jsx";

export const widgetList = {
  clock: <ClockWidget />,
  counter: <CounterWidget />,
  weather: <WeatherWidget />,
  todo: <TodoWidget />,
};

export const availableWidgets = [
  { id: "clock", component: <ClockWidget /> },
  { id: "weather", component: <WeatherWidget /> },
  { id: "counter", component: <CounterWidget /> },
  { id: "todo", component: <TodoWidget /> },
];
