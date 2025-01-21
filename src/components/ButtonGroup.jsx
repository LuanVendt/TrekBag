import Button from "./Button";

export default function ButtonGroup({
  onDeleteAllItems,
  onMarkAllAsComplete,
  onMarkAllAsIncomplete,
  onRestToInitial,
}) {
  const secondaryButons = [
    { title: "Mark all as complete", onClick: onMarkAllAsComplete },
    { title: "Mark all as incomplete", onClick: onMarkAllAsIncomplete },
    { title: "Reset to initial", onClick: onRestToInitial },
    { title: "Remove all items", onClick: onDeleteAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          buttonType="secondary"
          title={button.title}
        />
      ))}
    </section>
  );
}
