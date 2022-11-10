import { useEffect } from "react";
import { IconContext } from "react-icons";
import { MdInfo } from "react-icons/md";

export default function Alert({ isPositive, message, changeAlert }) {
  const colorClass = isPositive ? "positive" : "negative";

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeAlert(false, false, "");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [changeAlert]);

  return (
    <div className={`alert ${colorClass}`}>
      <IconContext.Provider value={{ position: "absolute", size: "24px" }}>
        <MdInfo></MdInfo>
      </IconContext.Provider>
      <span className="alert-text">{message}</span>
    </div>
  );
}
