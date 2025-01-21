export default function ItemList({ items, onDeleteItem, onToggleItem }) {
  return (
    <ul>
      {items.map((item) => (
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
        />{" "}
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
