export default function Counter({ items }) {
  const completeItems = items.filter((item) => item.packed);

  return (
    <p>
      <b>{completeItems.length}</b> / {items.length} items packed
    </p>
  );
}
