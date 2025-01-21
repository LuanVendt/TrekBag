import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ ondAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText.trim()) {
      setItemText("");
      inputRef.current.focus();
      return;
    }

    ondAddItem(itemText);

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
