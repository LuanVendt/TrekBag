export default function Button({ type, title }) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {title}
    </button>
  );
}
