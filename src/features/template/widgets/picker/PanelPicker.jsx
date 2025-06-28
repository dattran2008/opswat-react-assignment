import { useDraggable } from "@dnd-kit/core";
import ClockWidget from "../clock/ClockWidget";
import WeatherWidget from "../weather/WeatherWidget";
import CounterWidget from "../counter/CounterWidget";

const AVAILABLE_WIDGETS = [
  { id: "clock", component: <ClockWidget /> },
  { id: "weather", component: <WeatherWidget /> },
  { id: "counter", component: <CounterWidget /> },
];

const DraggableItem = ({ id, children, mode }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: mode !== "drag",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-move mb-2"
    >
      {children}
    </div>
  );
};

const WidgetPickerPanel = ({ mode }) => {
  return (
    <aside className="w-60 border-r p-4 bg-white">
      <h3 className="font-semibold mb-3 text-gray-700">Available Widgets</h3>
      {AVAILABLE_WIDGETS.map(({ id, component }) => (
        <DraggableItem key={id} id={id} mode={mode}>
          {component}
        </DraggableItem>
      ))}
    </aside>
  );
};

export default WidgetPickerPanel;
