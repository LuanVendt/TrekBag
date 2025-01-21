export default function Button({ onClick, buttonType, title }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {title}
    </button>
  );
}
