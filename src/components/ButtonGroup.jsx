import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      <Button type="secondary" title="Mark all as complete" />
      <Button type="secondary" title="Mark all as incomplete" />
      <Button type="secondary" title="Reset to initial" />
      <Button type="secondary" title="Remove all items" />
    </section>
  );
}
