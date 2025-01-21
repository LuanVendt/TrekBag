export default function ItemList({ items, setItems }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
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

      <button>❌</button>
    </li>
  );
}
