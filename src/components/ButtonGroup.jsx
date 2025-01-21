import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((title) => (
        <Button key={title} type="secondary" title={title} />
      ))}
    </section>
  );
}
