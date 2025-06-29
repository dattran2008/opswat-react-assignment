import { useDraggable, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { availableWidgets } from "../../WidgetList";
import { useWidgetStore } from "@/store/widget";

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
  const { widgets } = useWidgetStore();
  const { setNodeRef: setPanelRef } = useDroppable({
    id: "panel-dropzone",
  });

  return (
    <aside className="w-60 border-r p-4 bg-white">
      <h3 className="font-semibold mb-3 text-gray-700">Available Widgets</h3>
      <div id="panel-dropzone" ref={setPanelRef}>
        {availableWidgets.map(({ id, component }) => {
          const isAdded = widgets.some((widget) => widget.type === id);
          if (!isAdded) {
            return (
              <DraggableItem key={id} id={id} mode={mode}>
                {component}
              </DraggableItem>
            );
          }
        })}
        {/* <SortableContext items={[]} strategy={verticalListSortingStrategy}>
        </SortableContext> */}
      </div>
    </aside>
  );
};

export default WidgetPickerPanel;
