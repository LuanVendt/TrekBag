import { useState } from "react";
import Select from "react-select";
import { sortingOptions } from "../lib/constants";
import EmptyView from "./EmptyView";

export default function ItemList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "packed") return b.packed - a.packed;

    if (sortBy === "unpacked") return a.packed - b.packed;

    return a.id - b.id;
  });

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item" onClick={() => onToggleItem(item.id)}>
      <label onClick={() => onToggleItem(item.id)}>
        <input
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
