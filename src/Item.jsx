import { IconContext } from "react-icons";
import { MdEdit, MdDelete } from "react-icons/md";

export default function Item({ item, editItem, deleteItem }) {
  return (
    <div className="list-item">
      <p className="item-text">{item}</p>
      <div>
        <button className="edit-button" onClick={editItem}>
          <IconContext.Provider value={{ position: "absolute", size: "20px" }}>
            <MdEdit></MdEdit>
          </IconContext.Provider>
        </button>
        <button className="delete-button" onClick={deleteItem}>
          <IconContext.Provider value={{ position: "absolute", size: "20px" }}>
            <MdDelete></MdDelete>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
