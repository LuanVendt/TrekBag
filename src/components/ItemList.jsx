export default function ItemList({ items, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li
      className="item"
      onClick={() => {
        item.checked = true;
      }}
    >
      <label>
        <input checked={item.packed} type="checkbox" /> {item.name}
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
