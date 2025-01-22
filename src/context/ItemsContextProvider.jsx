import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMarkAllAsComplete = () => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: false })));
  };

  const handleRestToInitial = () => setItems(initialItems);

  const handleDeleteAllItems = () => setItems([]);

  const handleToggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const totalNumberOfItems = items.length;
  const totalCompletedItems = items.filter((item) => item.packed).length;

  return (
    <ItemsContext.Provider
      value={{
        items,
        totalNumberOfItems,
        totalCompletedItems,
        handleAddItem,
        handleDeleteItem,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRestToInitial,
        handleDeleteAllItems,
        handleToggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
