import { useItemsStore } from "../stores/itemsStore";

export default function Counter() {
  const items = useItemsStore((state) => state.items);
  const totalNumberOfItems = items.length;
  const totalCompletedItems = items.filter((item) => item.packed).length;

  return (
    <p>
      <b>{totalCompletedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
