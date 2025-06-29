import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useWidgetStore } from "@/store/widget";
import EmptyDropZone from "@/components/EmptyDropZone";
import { widgetList } from "../WidgetList";

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move px-2"
    >
      {children}
    </div>
  );
};

const WidgetDashboard = () => {
  const widgets = useWidgetStore((s) => s.widgets);

  return (
    <>
      {widgets.length === 0 ? (
        <EmptyDropZone id="dashboard-dropzone" />
      ) : (
        <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {widgets.map(({ id, type }) => (
              <SortableItem key={id} id={id}>
                {widgetList[type]}
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      )}
    </>
  );
};

export default WidgetDashboard;
