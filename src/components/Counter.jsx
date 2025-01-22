import { useItemsContext } from "../lib/hooks";

export default function Counter() {
  const { totalNumberOfItems, totalCompletedItems } = useItemsContext();

  return (
    <p>
      <b>{totalCompletedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
