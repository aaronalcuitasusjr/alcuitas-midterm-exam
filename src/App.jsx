import { useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

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
                if (input) {
                  setList([...list, input]);
                  setInput("");
                }
              }}
            >
              Submit
            </button>
          </div>
          <div className="alert-container">test</div>
        </div>
        <div className="list-container">
          {list.length > 0 &&
            list.map((item) => {
              return <Item data={item}></Item>;
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
