import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, totalCompletedItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        totalCompletedItems={totalCompletedItems}
      />
    </header>
  );
}
