import { initialItems } from "../lib/constants";

export default function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  );
}
