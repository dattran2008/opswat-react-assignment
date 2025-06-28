import { useWidgetStore } from "@/store/widget";

const WIDGETS = ["clock", "counter", "weather"];

const WidgetPicker = () => {
  const { addWidget, removeWidget, widgets } = useWidgetStore();

  return (
    <div className="p-4 flex gap-2 flex-wrap">
      {WIDGETS.map((w) => {
        const isAdded = widgets.some((widget) => widget.type === w);

        return (
          <button
            key={w}
            onClick={() => (isAdded ? removeWidget(w) : addWidget(w))}
            className={`px-3 py-1 rounded text-sm shadow font-medium transition 
            ${isAdded ? "bg-red-200" : "bg-green-200"}`}
          >
            {isAdded ? `Remove ${w}` : `Add ${w}`}
          </button>
        );
      })}
    </div>
  );
};

export default WidgetPicker;
