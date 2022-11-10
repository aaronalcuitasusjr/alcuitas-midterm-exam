export default function Item({ item, editItem, deleteItem }) {
  return (
    <div className="list-item">
      <p className="item-text">{item}</p>
      <button className="edit-button" onClick={editItem}>
        edit
      </button>
      <button className="delete-button" onClick={deleteItem}>
        delete
      </button>
    </div>
  );
}
