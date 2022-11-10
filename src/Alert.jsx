import { useEffect } from "react";

export default function Alert({ isPositive, message, changeAlert }) {
  const colorClass = isPositive ? "positive" : "negative";

  setTimeout(() => {
    changeAlert(false, false, "");
  }, 3000);

  return <div className={`alert ${colorClass}`}>{message}</div>;
}
