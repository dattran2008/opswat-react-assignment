import { useDroppable } from "@dnd-kit/core";

const EmptyDropZone = ({ id }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[100px] border-2 border-dashed ${
        isOver ? "border-blue-400 bg-blue-50" : "border-gray-300"
      } flex items-center justify-center text-gray-500`}
    >
      Drop widget here
    </div>
  );
};

export default EmptyDropZone;
