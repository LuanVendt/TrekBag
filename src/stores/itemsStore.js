import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,

      addItem: (name) =>
        set((state) => ({
          items: [...state.items, { id: Date.now(), name, packed: false }],
        })),

      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      markAllAsComplete: () =>
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: true })),
        })),

      markAllAsIncomplete: () =>
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        })),

      restToInitial: () => set(() => ({ items: initialItems })),

      deleteAllItems: () => set(() => ({ items: [] })),

      toggleItem: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          ),
        }));
      },
    }),
    {
      name: "items",
    }
  )
);
