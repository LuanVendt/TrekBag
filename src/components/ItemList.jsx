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
    <li
      className="item"
      onClick={() => {
        item.checked = true;
      }}
    >
      <label onClick={() => onToggleItem(item.id)}>
        <input
          onClick={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />{" "}
        {item.name}
      </label>

      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
