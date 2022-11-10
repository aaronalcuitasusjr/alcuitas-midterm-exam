export default function Item({ data }) {
  return (
    <div className="list-item">
      <p className="item-text">{data}</p>
      <button className="edit-button">edit</button>
      <button className="delete-button">delete</button>
    </div>
  );
}
