import { useEffect } from "react";

export default function Alert({ isPositive, message, changeAlert }) {
  const colorClass = isPositive ? "positive" : "negative";

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeAlert(false, false, "");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [changeAlert]);

  return <div className={`alert ${colorClass}`}>{message}</div>;
}
