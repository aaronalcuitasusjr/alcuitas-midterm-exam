import { useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editInd, setEditInd] = useState(null);

  const editItem = (item, i) => {
    setIsEditing(true);
    setEditInd(i);
    setInput(item);
  };

  const deleteItem = (i) => {
    setList(list.filter((item, index) => index !== i));
  };

  return (
    <div className="App">
      <div className="grocery-bud">
        <div className="title-bar">
          <div className="title">Grocery Bud</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="e.g. eggs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
              className="submit-button"
              onClick={() => {
                if (isEditing) {
                  if (input) {
                    setList(
                      list.map((item, index) => {
                        if (index === editInd) {
                          return input;
                        }
                        return item;
                      })
                    );
                    setIsEditing(false);
                    setEditInd(null);
                    setInput("");
                  }
                } else {
                  if (input) {
                    setList([...list, input]);
                    setInput("");
                  }
                }
              }}
            >
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
          <div className="alert-container">test</div>
        </div>
        <div className="list-container">
          {list.length > 0 &&
            list.map((item, i) => {
              return (
                <Item
                  key={i}
                  item={item}
                  editItem={() => editItem(item, i)}
                  deleteItem={() => deleteItem(i)}
                ></Item>
              );
            })}
        </div>
        {list.length > 0 && (
          <div className="clear-items-container">
            <button className="clear-button" onClick={() => setList([])}>
              Clear Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
