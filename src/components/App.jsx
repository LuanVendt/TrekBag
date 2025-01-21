import { useEffect, useState } from "react";
import { initialItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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

  const totalNumberOfItems = items.length;
  const totalCompletedItems = items.filter((item) => item.packed).length;

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalNumberOfItems={totalNumberOfItems}
          totalCompletedItems={totalCompletedItems}
        />
        <ItemList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleRestToInitial={handleRestToInitial}
          handleDeleteAllItems={handleDeleteAllItems}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
