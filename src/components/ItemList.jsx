import { useMemo, useState } from "react";
import Select from "react-select";
import { sortingOptions } from "../lib/constants";
import { useItemsContext } from "../lib/hooks";
import EmptyView from "./EmptyView";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleDeleteItem, handleToggleItem } = useItemsContext();
  useMemo(() => {}, []);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") return b.packed - a.packed;

        if (sortBy === "unpacked") return a.packed - b.packed;

        return a.id - b.id;
      }),
    [items, sortBy]
  );

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
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
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
