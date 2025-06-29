import { useWidgetStore } from "@/store/widget";
import { WIDGETS } from "../../constants";
import Button from "@/components/Button";

const WidgetPicker = () => {
  const { addWidget, removeWidget, widgets } = useWidgetStore();

  return (
    <div className="p-4 flex gap-2 flex-wrap">
      {WIDGETS.map((widget) => {
        const isAdded = widgets.some((item) => item.type === widget);
        return (
          <Button
            key={widget}
            onClick={() => (isAdded ? removeWidget(widget) : addWidget(widget))}
            className={`px-3 py-1 text-sm shadow font-medium transition ${
              isAdded ? "bg-red-200" : "bg-green-200"
            }`}
          >
            {isAdded ? `Remove ${widget}` : `Add ${widget}`}
          </Button>
        );
      })}
    </div>
  );
};

export default WidgetPicker;
