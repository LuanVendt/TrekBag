import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText.trim()) {
      setItemText("");
      inputRef.current.focus();
      return;
    }

    setItems((prev) => [
      ...prev,
      { id: Date.now(), name: itemText, packed: false },
    ]);
    setItemText("");

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button title="Add to list" />
    </form>
  );
}
