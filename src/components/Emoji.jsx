function Emoji({symbol, label}) {
  return (
    <span
      aria-hidden={label ? "false" : "true"}
      aria-label={label || ""}
      className="emoji"
      role="img"
    >
      {symbol}
    </span>
  );
}
export default Emoji;
