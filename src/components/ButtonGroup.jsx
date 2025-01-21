import Button from "./Button";

export default function ButtonGroup({
  onDeleteAllItems,
  onMarkAllAsComplete,
  onMarkAllAsIncomplete,
  onRestToInitial,
}) {
  return (
    <section className="button-group">
      <Button
        onClick={onMarkAllAsComplete}
        buttonType="secondary"
        title="Mark all as complete"
      />
      <Button
        onClick={onMarkAllAsIncomplete}
        buttonType="secondary"
        title="Mark all as incomplete"
      />
      <Button
        onClick={onRestToInitial}
        buttonType="secondary"
        title="Reset to initial"
      />
      <Button
        onClick={onDeleteAllItems}
        buttonType="secondary"
        title="Remove all items"
      />
    </section>
  );
}
