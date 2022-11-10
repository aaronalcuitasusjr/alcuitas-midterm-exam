import { IconContext } from "react-icons";
import { MdEdit, MdDelete } from "react-icons/md";

export default function Item({ item, editItem, deleteItem }) {
  return (
    <div className="list-item">
      <p className="item-text">{item}</p>
      <button className="edit-button" onClick={editItem}>
        <IconContext.Provider value={{ position: "absolute", size: "20px" }}>
          <div>
            <MdEdit></MdEdit>
          </div>
        </IconContext.Provider>
      </button>
      <button className="delete-button" onClick={deleteItem}>
        <IconContext.Provider value={{ position: "absolute", size: "20px" }}>
          <div>
            <MdDelete></MdDelete>
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
}
