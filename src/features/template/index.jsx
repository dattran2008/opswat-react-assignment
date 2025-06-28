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
  const { widgets, setWidgets, addWidget } = useWidgetStore();
  // const sensors = useSensors(useSensor(PointerSensor));

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
    // Nếu widget đã nằm trong dashboard → xử lý sắp xếp
    // const activeIndex = widgets.findIndex((w) => w.id === active.id);
    // const overIndex = widgets.findIndex((w) => w.id === over.id);

    // if (activeIndex !== -1 && overIndex !== -1) {
    //   setWidgets(arrayMove(widgets, activeIndex, overIndex));
    // } else {
    //   // Nếu widget chưa có trong dashboard → kéo từ panel vào
    //   const type = active.id; // active.id chính là "clock" / "weather" v.v. (id ở panel)
    //   const exists = widgets.some((w) => w.type === type);

    //   if (!exists) {
    //     setWidgets([...widgets, { id: `${type}-${Date.now()}`, type }]);
    //   }
    // }

    const draggedId = active.id;
    const droppedOverId = over.id;

    const existing = widgets.find((w) => w.id === draggedId);
    // Lấy type từ draggedId nếu theo format: `${type}-${uuid}`
    const type = draggedId.split("-")[0];

    // 🎯 Nếu widget chưa tồn tại (vì đã remove trước đó), thì add mới
    if (!existing) {
      addWidget(type); // hoặc addWidget({ id: draggedId, type })
      return;
    }

    // 🧩 Nếu đã tồn tại → xử lý sắp xếp lại
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
