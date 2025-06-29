import { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import Header from "@/features/template/dashboard/Header";
import WidgetDashboard from "@/features/template/dashboard/Dashboard";
import WidgetPicker from "./widgets/picker/WidgetPicker";
import WidgetPickerPanel from "./widgets/picker/PanelPicker";
import { useWidgetStore } from "@/store/widget";

const WidgetApp = () => {
  const { setNodeRef } = useDroppable({ id: "dashboard-dropzone" });
  const { widgets, setWidgets, addWidget, removeWidget } = useWidgetStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      return;
    }
    const draggedId = active.id;
    const droppedOverId = over.id;
    const type = draggedId.split("-")[0];
    const existing = widgets.find((w) => w.id === draggedId);

    if (droppedOverId === "panel-dropzone") {
      removeWidget(type);
      return;
    }
    //If widget not exist, add new
    if (!existing) {
      addWidget(type);
      return;
    }
    // If widget exist, handle sort widget
    if (draggedId !== droppedOverId) {
      const oldIndex = widgets.findIndex((w) => w.id === draggedId);
      const newIndex = widgets.findIndex((w) => w.id === droppedOverId);
      setWidgets(arrayMove(widgets, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("widget_default_template");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWidgets(parsed);
          return;
        }
      } catch (error) {
        console.error(error);
      }
    }
    // default template fallback
    setWidgets(["clock", "weather"]);
  }, []);

  useEffect(() => {
    if (widgets.length > 0) {
      localStorage.setItem("widget_default_template", JSON.stringify(widgets));
    }
  }, [widgets]);

  return (
    <div className="flex">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={({ active, over }) => handleDragEnd({ active, over })}
        autoScroll={true}
      >
        <WidgetPickerPanel mode="drag" />
        <div className="w-full bg-gray-50">
          <Header />
          <WidgetPicker />
          <div className="flex">
            <div
              className="flex-1 p-4"
              ref={setNodeRef}
              id="dashboard-dropzone"
            >
              <WidgetDashboard />
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default WidgetApp;
