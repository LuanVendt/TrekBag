import { useItemsContext } from "../lib/hooks";
import Button from "./Button";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleRestToInitial,
    handleDeleteAllItems,
  } = useItemsContext();

  const secondaryButons = [
    { title: "Mark all as complete", onClick: handleMarkAllAsComplete },
    { title: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
    { title: "Reset to initial", onClick: handleRestToInitial },
    { title: "Remove all items", onClick: handleDeleteAllItems },
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
