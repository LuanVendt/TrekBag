import { useState } from "react";
import { initialItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItems);

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

  const handleDeleteAllItems = () => setItems([]);

  const handleRestToInitial = () => setItems(initialItems);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header items={items} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleDeleteAllItems={handleDeleteAllItems}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleRestToInitial={handleRestToInitial}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
