import { create } from "zustand";

export const useWidgetStore = create((set, get) => ({
  widgets: [],
  addWidget: (type) =>
    set((state) => {
      const id = `${type}-${crypto.randomUUID()}`;
      return state.widgets.some((w) => w.type === type)
        ? state
        : {
            widgets: [...state.widgets, { id, type }],
          };
    }),
  removeWidget: (type) =>
    set((state) => ({
      widgets: state.widgets.filter((w) => w.type !== type),
    })),
  setWidgets: (widgets) => set(() => ({ widgets })),
  hasWidget: (type) => get().widgets.some((w) => w.type === type),
}));
