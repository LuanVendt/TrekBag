import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleDeleteAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleRestToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm ondAddItem={handleAddItem} />
      <ButtonGroup
        onDeleteAllItems={handleDeleteAllItems}
        onMarkAllAsComplete={handleMarkAllAsComplete}
        onMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        onRestToInitial={handleRestToInitial}
      />
    </div>
  );
}
