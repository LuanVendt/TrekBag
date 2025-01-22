import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const restToInitial = useItemsStore((state) => state.restToInitial);
  const deleteAllItems = useItemsStore((state) => state.deleteAllItems);

  const secondaryButons = [
    { title: "Mark all as complete", onClick: markAllAsComplete },
    { title: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { title: "Reset to initial", onClick: restToInitial },
    { title: "Remove all items", onClick: deleteAllItems },
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
