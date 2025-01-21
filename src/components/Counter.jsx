export default function Counter({ totalNumberOfItems, totalCompletedItems }) {
  return (
    <p>
      <b>{totalCompletedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
